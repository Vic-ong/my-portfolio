export const cicdSnippet = `
image: node:12.13.0-alpine
stages:
  - build
  - deploy

### Build Stage ###
.build_process:
  before_script:
    - yarn config set cache-folder .yarn
  script:
    - yarn add @vue/cli-service@4.5.8
    - yarn install
    - yarn lint
    - yarn build
  variables:
    VUE_APP_FIREBASE_CONFIG: $FIREBASE_CONFIG
    VUE_APP_GCF_URL: $GCF_URL
    VUE_APP_SUPPORT_EMAIL: $SUPPORT_EMAIL
  artifacts:
    paths:
      - dist
      - node_modules/**

build_staging:
  stage: build
  extends: .build_process
  environment:
    name: staging
  except:
    - master
    - /^release-.*$/

build_production:
  stage: build
  extends: .build_process
  environment:
    name: production
  only:
    - master
    - /^release-.*$/

### Deploy Staging ###
.deploy_process:
  environment:
    name: staging
  before_script:
    - npm i -g firebase-tools
  script:
    - firebase use staging --token $FIREBASE_TOKEN
    - firebase deploy --only hosting:staging -m "Pipeline $CI_PIPELINE_ID, build $CI_BUILD_ID" --non-interactive --token $FIREBASE_TOKEN

deploy_staging:
  stage: deploy
  extends: .deploy_process
  when: manual
  only:
    - dev

### Deploy Production ###
.deploy_production_process:
  environment:
    name: production
  before_script:
    - npm i -g firebase-tools
  script:
    - firebase use production --token $FIREBASE_TOKEN
    - firebase deploy --only hosting:production -m "Pipeline $CI_PIPELINE_ID, build $CI_BUILD_ID" --non-interactive --token $FIREBASE_TOKEN

deploy_production:
  stage: deploy
  extends: .deploy_production_process
  when: manual
  only:
    - master

deploy_release:
  stage: deploy
  extends: .deploy_production_process
  only:
    - /^release-.*$/
`;

export const onboardingViewSnippet = `
<template>
  <div class="page-container">
    <div class="page-content">
      <div class="title-container">
        <div class="text-title mt-3 mb-3">{{ $t('NewUser-Welcome') }}</div>
        <v-spacer></v-spacer>

        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <div @click="signOutHandler" v-bind="attrs" v-on="on" class="signout-button">
              <v-icon color="primary mr-2" small>mdi-logout</v-icon>
              <div class="text-body">{{ $t('Button-Signout') }}</div>
            </div>
          </template>
          <div class="text-body white--text pa-2" style="max-width: 250px">{{ $t('NewUser-SignoutTooltip') }}</div>
        </v-tooltip>
      </div>

      <div v-if="isLoading" class="page-loader">
        <v-progress-circular :size="80" :width="7" color="primary" indeterminate></v-progress-circular>
      </div>

      <div v-else-if="isError" class="pt-10">
        <internal-error-msg></internal-error-msg>
      </div>

      <div v-else>
        <v-stepper v-model="step" class="onboarding-container" vertical>
          <div v-for="({ titleKey, component }, i) in steps" v-bind:key="titleKey">
            <v-stepper-step :complete="step > i + 1" :step="i + 1" class="pa-0 pt-3 pb-3">
              {{ $t(titleKey) }}
            </v-stepper-step>
            <v-stepper-content :step="i + 1" class="pa-2 pl-0">
              <div class="pa-2 pb-4 pr-12">
                <component v-if="step === i + 1" :is="component" :user="user" @next="handleNext" />
              </div>
            </v-stepper-content>
          </div>
        </v-stepper>
      </div>
    </div>
  </div>
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { mapGetters } from 'vuex';
import InternalErrorMsg from '@/ui/shared/InternalErrorMsg.vue';
import EmailVerification from './components/EmailVerification.vue';
import MobileVerification from './components/MobileVerification.vue';
import GeneralInfo from './components/GeneralInfo.vue';

export default {
  name: 'Onboarding',
  components: {
    InternalErrorMsg,
  },
  data() {
    return {
      step: 1,
      steps: [
        {
          titleKey: 'NewUser-Step-Username',
          component: GeneralInfo,
        },
        {
          titleKey: 'NewUser-Step-EmailVerification',
          component: EmailVerification,
        },
        {
          titleKey: 'NewUser-Step-MobileVerification',
          component: MobileVerification,
        },
      ],
    };
  },
  computed: {
    ...mapGetters('users', {
      user: 'user',
    }),
    isXs() {
      return this.$vuetify.breakpoint.xs;
    },
    userAuth() {
      return firebase.auth().currentUser;
    },
    isLoading() {
      return !this.userAuth || this.user.loading;
    },
    isError() {
      return !this.userAuth || this.user.error;
    },
  },
  methods: {
    handleNext(step) {
      this.step = step;
    },
    signOutHandler() {
      try {
        this.signOut().then(() => {
          this.$router.replace({ name: 'login' });
        });
      } catch (err) {
        console.error(err);
      }
    },
    signOut() {
      return firebase.auth().signOut();
    },
  },
};
</script>

<style lang="scss" scoped>
.page-container {
  display: flex;
  justify-content: center;
  align-items: center;
  .page-content {
    display: flex;
    flex-direction: column;
    max-width: 800px;
  }
}
.title-container {
  display: flex;
  align-items: center;
}
.signout-button {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.onboarding-container {
  box-shadow: none;
}
</style>
`;

export const emailVerificationSnippet = `
<template>
  <div>
    <v-card class="pa-7 mb-7 elevation-3">
      <div class="d-flex align-center mb-5">
        <v-icon class="mr-3" color="primary">mdi-email-lock</v-icon>
        <span class="text-subheading">{{ $t('NewUser-VerifyEmailTitle') }}</span>
      </div>
      <div class="text-body black--text">{{ $t('NewUser-VerifyEmailDesc') }}</div>
      <div class="text-body black--text">
        <div>
          {{ $t('NewUser-ResendVerifyEmail') }}
          <a @click="resendEmailHandler">
            {{ $t('NewUser-ResendVerifyEmailLink') }}
          </a>
        </div>
      </div>
      <status-info :color="statusColor">{{ statusText }}</status-info>
    </v-card>
    <lyght-button @click="handleNext" :loading="loading" color="primary">{{ $t('Button-Continue') }}</lyght-button>
  </div>
</template>

<script>
import firebase from '@/services/firebase';
import status from '@/mixins/status';
import { getGoogleLanguageCode } from '@/utils/locale';

export default {
  name: 'EmailVerification',
  mixins: [status],
  data() {
    return {
      checkForVerifiedInterval: null,
      loading: false,
      nextStep: 3,
    };
  },
  created() {
    if (this.isVerified()) this.$emit('next', this.nextStep);
    this.checkForVerifiedInterval = setInterval(() => {
      firebase
        .auth()
        .currentUser.reload()
        .then(() => {
          if (this.isVerified()) {
            clearInterval(this.checkForVerifiedInterval);
            this.$emit('next', this.nextStep);
          }
        });
    }, 1000);
  },
  beforeDestroy() {
    if (this.checkForVerifiedInterval) clearInterval(this.checkForVerifiedInterval);
  },
  methods: {
    isVerified() {
      return firebase.auth().currentUser.emailVerified === true;
    },
    sendEmailVerification() {
      this.clearStatus();
      const lang = getGoogleLanguageCode(this.$i18n.locale);
      firebase.auth().languageCode = lang;

      return firebase.auth().currentUser.sendEmailVerification();
    },
    resendEmailHandler() {
      this.clearStatus();
      this.loading = true;

      firebase
        .auth()
        .currentUser.reload()
        .then(() => {
          if (!this.isVerified()) {
            this.sendEmailVerification()
              .then(() => {
                this.loading = false;
                this.status = {
                  text: this.$t('Status-NewVerificationLink'),
                  color: 'info--text',
                };
              })
              .catch((err) => {
                this.loading = false;
                this.setStatusError(err);
              });
          } else {
            this.$emit('next', this.nextStep);
          }
        });
    },
    handleNext() {
      this.clearStatus();
      this.loading = true;

      firebase
        .auth()
        .currentUser.reload()
        .then(() => {
          if (this.isVerified()) {
            this.$emit('next', this.nextStep);
          } else {
            this.loading = false;
            this.setStatusError(this.$t('Status-EmailNotVerified'));
          }
        });
    },
  },
};
</script>
`;

export const generalInfoSnippet = `
<template>
  <div>
    <v-card class="pa-7 mb-7 elevation-3">
      <v-form ref="form" v-model="valid" @submit.prevent lazy-validation>
        <div class="d-flex align-center mb-5">
          <v-icon class="mr-3" color="primary">mdi-account-circle</v-icon>
          <span class="text-subheading">{{ $t('NewUser-Personal-GeneralInfo') }}</span>
        </div>
        <username-form :input="input" :loading="loading"></username-form>

        <!-- Service terms -->
        <v-checkbox v-model="serviceTermCheckbox" :rules="termsRules">
          <template #label>
            <div class="text-body">
              {{ $t('NewUser-Personal-AgreeTo') }}
              <a @click.stop href="/legal/service-terms" target="_blank">
                {{ $t('NewUser-Personal-ServiceTermsLink') }}
              </a>
            </div>
          </template>
        </v-checkbox>

        <!-- Privacy policy -->
        <v-checkbox v-model="privacyPolicyCheckbox" :rules="termsRules">
          <template #label>
            <div class="text-body">
              {{ $t('NewUser-Personal-AgreeTo') }}
              <a @click.stop href="/legal/privacy-policy" target="_blank">
                {{ $t('NewUser-Personal-PrivacyPolicyLink') }}
              </a>
            </div>
          </template>
        </v-checkbox>
      </v-form>
    </v-card>

    <status-info v-if="statusText" :color="statusColor">{{ statusText }}</status-info>
    <lyght-button :loading="loading" @click="handleNext" color="primary">
      {{ $t('Button-Continue') }}
    </lyght-button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import firebase from '@/services/firebase';
import status from '@/mixins/status';
import UsernameForm from '@/ui/shared/Forms/UsernameForm.vue';

export default {
  name: 'GeneralInfo',
  components: {
    UsernameForm,
  },
  mixins: [status],
  props: {
    user: {
      type: Object,
      default: () => {},
    },
  },
  mounted() {
    this.initialize();
  },
  data() {
    return {
      valid: true,
      loading: false,
      input: {
        displayName: null,
        firstName: null,
        lastName: null,
      },
      serviceTermCheckbox: false,
      privacyPolicyCheckbox: false,
    };
  },
  computed: {
    userAuth() {
      return firebase.auth().currentUser;
    },
    userId() {
      return this.userAuth.uid;
    },
    isXs() {
      return this.$vuetify.breakpoint.xs;
    },
    termsRules() {
      return [(v) => !!v || this.$t('Status-AgreeToTerms')];
    },
  },
  methods: {
    ...mapActions('users', {
      updateUser: 'updateUser',
    }),
    initialize() {
      const d = this.user.data;

      Object.keys(this.input).forEach((field) => {
        if (this.hasData(d[field])) {
          this.input[field] = d[field];
        }
      });

      const complete = Object.keys(this.input).every((field) => this.hasData(d[field]));
      if (complete) {
        this.$emit('next', 2);
      }
    },
    hasData(v) {
      return !!v || v === 0 || v === false;
    },
    validate() {
      this.valid = this.$refs.form.validate();
    },
    async handleNext() {
      this.clearStatus();
      this.validate();
      if (this.valid) {
        this.loading = true;
        try {
          await this.updateUser({
            id: this.userId,
            ...this.input,
          });
          this.$emit('next', 2);
        } catch (err) {
          this.loading = false;
          this.setStatusError(this.$t('Status-InternalError'));
        }
      }
    },
  },
};
</script>
`;

export const mobileVerificationSnippet = `
<template>
  <div>
    <v-card class="pa-7 mb-7 elevation-3">
      <div class="d-flex align-center mb-5">
        <v-icon class="mr-3" color="primary">mdi-cellphone-key</v-icon>
        <span class="text-subheading">{{ $t('NewUser-VerifyMobileTitle') }}</span>
      </div>
      <v-form ref="form" v-model="valid" @submit.prevent lazy-validation>
        <v-row>
          <v-col cols="12" md="6">
            <v-autocomplete
              v-model="input.countryCode"
              :items="countryCode.items"
              :label="$t('Field-CountryCode')"
              :rules="countryCode.rules"
              :disabled="loading"
              validate-on-blur
              outlined
              required
            ></v-autocomplete>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="input.phoneNumber"
              :label="$t('Field-MobileNumber')"
              :rules="phoneNumberRules"
              :disabled="loading"
              validate-on-blur
              outlined
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-form>
    </v-card>
    <status-info v-if="statusText" :color="statusColor">{{ statusText }}</status-info>
    <div class="text-body mb-2">{{ $t('NewUser-VerifyMobileNote') }}</div>
    <div>
      <div id="recaptcha-container"></div>
    </div>
    <lyght-button color="primary" :disabled="disabled" :loading="loading" @click="verifyMobile">
      {{ $t('Button-Verify') }}
    </lyght-button>
    <v-dialog v-model="codeVerifyDialog" max-width="400px" persistent>
      <v-card>
        <v-card-actions class="justify-end">
          <v-btn @click="resetHandler" icon><v-icon>mdi-close</v-icon></v-btn>
        </v-card-actions>
        <v-form ref="formCodeVerifier" v-model="validCode" class="px-7 pb-5" lazy-validation>
          <div class="text-title">{{ $t('NewUser-VerifyMobileDialogTitle') }}</div>
          <div class="text-body mb-5">
            {{ $t('NewUser-VerifyMobileDialogDesc', { number: phoneNumberDisplay }) }}
          </div>
          <v-text-field
            v-model="input.code"
            :label="$t('Field-MobileVerificationCode')"
            :placeholder="$t('Field-MobileVerificationPlaceholder')"
            :rules="codeRules"
            :loading="loading"
            :disabled="loading"
            validate-on-blur
            outlined
            required
          ></v-text-field>
          <div class="text-body black--text">
            {{ $t('NewUser-VerifyMobileHelp') }}
            <span @click="resetHandler" class="cursor-pointer" style="text-decoration: underline">
              {{ $t('NewUser-VerifyMobileHelpLink') }}
            </span>
          </div>
          <v-card-actions class="justify-center">
            <lyght-button color="primary" class="mt-3" :loading="loading" @click="verifyCodeHandler">
              {{ $t('Button-Submit') }}
            </lyght-button>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { mapActions } from 'vuex';
import status from '@/mixins/status';
import { sendCode, verifyCode } from '@/services/functions/auth';
import phoneCountryCodeList from '@/constants/phoneCountryCodeList.json';
import form from '@/utils/validation/form';

export default {
  name: 'MobileVerification',
  mixins: [status],
  props: {
    user: {
      type: Object,
      default: () => {},
    },
  },
  created() {
    firebase.auth().useDeviceLanguage();
  },
  mounted() {
    if (this.user.data.setup && this.user.data.setup.accountVerified) {
      this.$router.replace({ name: 'projects' });
    }
    this.initRecaptcha();
  },
  data() {
    return {
      valid: true,
      loading: false,
      disabled: false,
      input: {
        countryCode: '+886',
        phoneNumber: null,
        code: null,
        sessionInfo: null,
      },
      codeVerifyDialog: false,
      validCode: true,
    };
  },
  computed: {
    userAuth() {
      return firebase.auth().currentUser;
    },
    isXs() {
      return this.$vuetify.breakpoint.xs;
    },
    countryCode() {
      return {
        items: phoneCountryCodeList.map((item) => ({
          text: \`\${item.name} (\${item.dial_code})\`,
          value: item.dial_code,
        })),
        rules: [form.required(this.t)],
      };
    },
    phoneNumberRules() {
      return [form.required(this.t), form.phoneNumber(this.t)];
    },
    codeRules() {
      return [form.required(this.t), form.number(this.t), form.exactLength(this.t, { len: 6 })];
    },
    phoneNumberDisplay() {
      return this.input.phoneNumber ? this.input.phoneNumber.toString().slice(5) : null;
    },
    fullPhoneNumber() {
      return \`\${this.input.countryCode}\${this.input.phoneNumber}\`;
    },
  },
  methods: {
    ...mapActions('users', {
      createAuth: 'createAuth',
      updateUser: 'updateUser',
    }),
    t(v, params) {
      return this.$t(v, params);
    },
    initRecaptcha() {
      // Start Firebase invisible reCAPTCHA verifier
      window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
        size: 'invisible',
        callback() {
          // reCAPTCHA solved, return token.
        },
      });
    },
    validateForm() {
      this.valid = this.$refs.form.validate();
    },
    validateCodeForm() {
      this.validCode = this.$refs.formCodeVerifier.validate();
    },
    async verifyMobile() {
      this.clearStatus();
      this.validateForm();
      if (this.valid) {
        try {
          this.disabled = true;
          this.loading = true;

          const appVerifier = window.recaptchaVerifier;
          const recaptchaToken = await appVerifier.verify();

          this.codeVerifyDialog = true;
          const res = await sendCode({
            userId: this.userAuth.uid,
            phoneNumber: this.fullPhoneNumber,
            recaptchaToken,
          });
          this.input.sessionInfo = res.data.result.sessionInfo;
          this.loading = false;
        } catch (err) {
          this.codeVerifyDialog = false;
          this.loading = false;
          this.disabled = false;
          this.setStatusError(err);
        }
      }
    },
    async verifyCodeHandler() {
      this.clearStatus();
      this.validateCodeForm();
      if (this.validCode) {
        try {
          this.loading = true;
          const { code, sessionInfo } = this.input;
          await verifyCode({ code, sessionInfo });

          await this.setUserAccess();
          await this.updateUserProfile();

          this.codeVerifyDialog = false;
          // auto re-route when data is user data is updated
        } catch (err) {
          this.loading = false;
          this.disabled = false;
          this.codeVerifyDialog = false;
          this.setStatusError(err);
        }
      }
    },
    resetHandler() {
      window.location.reload(true);
    },
    async setUserAccess() {
      await this.createAuth({
        _id: this.userAuth.uid,
        email: this.user.data.email,
      });
      // Force token refresh. The token claims will contain the additional claims.
      firebase.auth().currentUser.getIdToken(true);
    },
    async updateUserProfile() {
      const param = {
        id: this.userAuth.uid,
        phoneNumber: this.fullPhoneNumber,
        setup: {
          accountVerified: true,
        },
      };
      await this.updateUser(param);
    },
  },
};
</script>
`;

export const uploadPhotoSnippet = `
<template>
  <div>
    <input type="file" ref="uploadphoto" style="display: none" @change="previewImage" accept="image/*" />
    <div v-if="loading">
      <div class="picture-uploading">
        <div class="text-body secondary--text mb-5">Uploading ({{ upload }}%)</div>
        <v-progress-linear
          color="secondary"
          buffer-value="0"
          :value="upload"
          class="pl-5 pr-5"
          stream
        ></v-progress-linear>
      </div>
    </div>
    <div v-else-if="!src">
      <div class="placeholder-container" @click="choosePicture()">
        <div class="img-container">
          <v-img :src="placeholder" class="cursor-pointer" width="100vh" aspect-ratio="1.5" contain />
        </div>
        <div class="text-body grey--text">{{ placeholderImgText }}</div>
      </div>
    </div>
    <div v-else>
      <div class="img-container">
        <v-img @click="choosePicture()" :src="src" class="cursor-pointer" width="100vh" aspect-ratio="1.5" contain />
      </div>
    </div>
  </div>
</template>

<script>
import firebase from '@/services/firebase';

export default {
  props: {
    imgKey: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    src: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    path: {
      type: String,
      default: '',
    },
    bucket: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      loading: false,
      upload: 0,
      placeholderImgText: 'Click to upload file (.jpg, .png)',
      pictureData: '',
    };
  },
  computed: {
    storageRef() {
      return firebase.storage().ref(this.bucket);
    },
  },
  methods: {
    choosePicture() {
      this.$refs.uploadphoto.click();
    },
    previewImage(event) {
      [this.pictureData] = event.target.files;
      this.onUpload();
    },
    onUpload() {
      this.loading = true;

      const uploadTask = this.storageRef.child(this.path).put(this.pictureData);
      uploadTask.on(
        'state_changed',
        // uploading
        (snapshot) => {
          this.upload = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        // upload error
        (err) => {
          this.pictureUploadDisabled = false;
          this.loading = false;
          console.error(err.message);
        },
        // upload complete
        () => {
          this.pictureUploadDisabled = false;
          this.loading = false;
          this.upload = 100;
          uploadTask.snapshot.ref.getDownloadURL().then((url) => {
            this.$emit('uploaded', { key: this.imgKey, url });
          });
        },
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.placeholder-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  cursor: pointer;

  .img-container {
    position: relative;
    width: 150px;
    height: 100px;
  }
}
.img-container {
  position: relative;
  width: 300px;
  height: 200px;
}
.picture-uploading {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  height: 200px;
  width: 300px;
}
</style>
`;
