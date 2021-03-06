<template>
  <ProjectViewContainer
    :loading="loading"
    :error="error"
    :title="project.data.name"
  >
    <div class="flex justify-center">
      <img
        :src="project.data.img"
        class="h-56 w-56"
      >
    </div>

    <div>
      <TextHeading>
        Overview
      </TextHeading>
      <TextBody>
        <div class="flex">
          <a
            :href="project.data.link"
            target="_blank"
          >
            <img
              :src="titleImg"
              class="h-12 rounded-md"
            >
          </a>
        </div>

        <div>
          A full-stack application to showcase a
          <b>
            conceptual design of the Spotify app.
          </b>
          I wanted to create visuals that trigger nostalgic recollections reminiscing the old-school ways of listening to music on a vinyl player.  Functionality wise, I wanted to analyze and display top music and audio features using
          <a
            href="https://developer.spotify.com/"
            target="_blank"
          >
            Spotify’s public API.
          </a>
        </div>

        <div class="ml-5">
          <div class="flex">
            🚀
            <a
              :href="project.data.link"
              target="_blank"
              class="ml-2"
            >
              Live demo
            </a>
          </div>
          <div class="flex">
            📦
            <a
              :href="project.data.source"
              target="_blank"
              class="ml-2"
            >
              Source code
            </a>
          </div>
        </div>
      </TextBody>
    </div>

    <div>
      <TextHeading>
        Background
      </TextHeading>
      <TextBody>
        <div>
          We have observed time and time again where
          <a
            href="https://uxdesign.cc/form-is-function-9a58e9f8bb75"
            target="_blank"
          >
            designs converge in the contemporary market
          </a>
          with businesses produce similar-looking products because it appeals to the masses. What vintage designs will give us, in contrast, is the big, the bold and the bizarre. We can see its presence in film productions (Wes Anderson), speaker designs (Marshall) and fashion trends (rise of vintage fashion). Many are drawn toward the nostalgic sentiment it offers, including myself. Motivated by this chain of thoughts, I decided to challenge myself to use vintage color palettes and animations in web development.
        </div>
      </TextBody>
    </div>

    <div>
      <TextHeading>
        Features
      </TextHeading>
      <TextBody>
        <div>
          This app has a few basic functionalities of a music player and shows fun insights using Spotify API.
        </div>
        <div>
          <TextList>
            Authenticate by prompting users to log in to their Spotify
          </TextList>
          <TextList>
            Animations depicting the actions of taking a vinyl disc from an album cover
          </TextList>
          <TextList>
            Audio feature analysis of users’ playlist
          </TextList>
          <TextList>
            A music player to play track samples
          </TextList>
          <TextList>
            Show the user’s top tracks and artists he/she listens to
          </TextList>
        </div>
      </TextBody>
    </div>

    <div>
      <TextHeading>
        Stack
      </TextHeading>
      <TextBody>
        <div>
          Frontend: Vite, Vue, Typescript, Tailwind CSS
        </div>
        <div>
          Backend: Google Functions, NodeJS
        </div>
      </TextBody>
    </div>

    <div>
      <TextHeading>
        Details
      </TextHeading>
      <TextBody>
        <div class="heading-3">
          Colors & animation designs
        </div>
        <div>
          I decided to use a retro color palette with a Wes Anderson, Grand Budapest Hotel twist. That’s right, pastel colors! I painted it on the background of the application while letting the original colors of the album thumbnail shine.
        </div>
        <div class="flex md-below:flex-col items-center justify-center lg-above:space-x-4">
          <div class="flex justify-center">
            <img
              :src="colorSchemeImg"
              :style="view.lgAndAbove ? 'height: 17rem' : ''"
            >
          </div>
          <div class="flex lg-above:flex-col items-center justify-center md-below:space-x-5 lg-above:space-y-5">
            <div
              class="h-12 w-12 rounded-sm"
              style="background-color: #53B5BB"
            />
            <div
              class="h-12 w-12 rounded-sm"
              style="background-color: #EEBB2E"
            />
            <div
              class="h-12 w-12 rounded-sm"
              style="background-color: #E7F0F0"
            />
            <div
              class="h-12 w-12 rounded-sm"
              style="background-color: #F9E4F0"
            />
          </div>
          <div class="flex justify-center">
            <img
              :src="homepageImg"
              class="md-below:mt-2 lg-above:ml-3"
              :style="view.lgAndAbove ? 'height: 16rem' : ''"
            >
          </div>
        </div>
        <div>
          For animations, I wanted to mimic the action of taking a vinyl disc from an album cover. I think it would create a cool effect and nostalgic sentiments.
        </div>
        <div class="flex flex-col items-center">
          <iframe
            src="https://giphy.com/embed/4N1wKKFopon8EWCvKh"
            frameBorder="0"
            class="h-44 giphy-embed"
            allowFullScreen
          />
          <a
            href="https://giphy.com/gifs/vinylmeplease-vinyl-sorcerer-miles-davis-4N1wKKFopon8EWCvKh"
            target="_blank"
            class="text-sm text-gray-darken"
          >
            Source: Giphy
          </a>
        </div>
        <div>
          I found a gif (shown above) that I'd like to recreate in CSS animations. There are 2 components: an album cover and a vinyl disc that slides out from the cover. The
          <a
            href="https://developer.spotify.com/documentation/web-api/reference/#category-albums"
            target="_blank"
          >
            tracks and albums data from Spotify contains thumbnail images
          </a>
          which I will use as the album cover. As for the vinyl disc, I just created a simple-looking disc in svg format.
        </div>
        <div class="flex justify-center">
          <iframe
            height="323"
            scrolling="no"
            title="eYvoWzZ"
            src="https://codepen.io/vic-ong/embed/eYvoWzZ?height=323&theme-id=dark&default-tab=html,result-box"
            frameborder="no"
            loading="lazy"
            allowtransparency="true"
            allowfullscreen="true"
            class="lg-above:w-96"
          >
            See the Pen <a href='https://codepen.io/vic-ong/pen/eYvoWzZ'>eYvoWzZ</a> by Vic
            (<a href='https://codepen.io/vic-ong'>@vic-ong</a>) on <a href='https://codepen.io'>CodePen</a>.
          </iframe>
        </div>

        <div class="heading-3">
          Authentication flow
        </div>
        <div>
          According to the Spotify API documentation, I can create a pop-up to prompt users to log in to their Spotify and return the access token to be used for future API calls. Using the authentication code flow guide, I created a NodeJS backend service to handle authentication requests.
        </div>
        <div class="flex flex-col items-center">
          <img
            :src="authFlowImg"
            class="h-96"
          >
          <a
            href="https://developer.spotify.com/documentation/general/guides/authorization-guide/#authorization-code-flow"
            target="_blank"
            class="text-xs text-gray-darken"
          >
            Source: Spotify Authorization Code Flow
          </a>
        </div>

        <CodeContainer>
          <template #title>
            <a
              href="https://github.com/Vic-ong/my-spotify-features/blob/main/backend/functions/src/router/index.ts"
              target="_blank"
            >
              my-spotify-features/backend/functions/src/router/index.ts
            </a>
          </template>
          <CodeBlock>
            {{ authHandlerSnippet }}
          </CodeBlock>
        </CodeContainer>

        <div class="heading-3">
          Audio features analysis
        </div>
        <div>
          Spotify focuses a lot on data analytics when it comes to exploring why people listen to certain music and music trends. Analysis I’m interested in are the top tracks, top artists and
          <a
            href="https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-several-audio-features"
            target="_blank"
          >
            audio features contained in tracks.
          </a>
          For the feature analysis, I calculated the mean of each feature score in a playlist and used Chart.js to display the result. As observed below, it tells me that my playlist "Rainbow Kitten Surprise" is generally high-energy and danceable! Would you like to
          <a
            href="https://open.spotify.com/playlist/6tgTYU8rKaKP93T7k4dHVb"
            target="_blank"
          >
            verify it?
          </a>
          🤓
        </div>
        <div class="flex justify-center">
          <img
            :src="audioFeatureImg"
            class="md-above:h-96"
          >
        </div>
      </TextBody>
    </div>
  </ProjectViewContainer>
</template>

<script lang="ts">
  import { defineComponent, computed } from 'vue';
  import { useBreakpoints } from '@/composables/breakpoints';
  import { useStore } from '@/composables/store';
  import { authHandlerSnippet } from '@/data/snippets/spotify';
  import ProjectViewContainer from '@/components/ProjectViewContainer.vue';
  import CodeContainer from '@/components/CodeContainer.vue';
  import CodeBlock from '@/components/CodeBlock.vue';

  export default defineComponent({
    name: 'ProjectSpotify',
    components: {
      ProjectViewContainer,
      CodeContainer,
      CodeBlock,
    },
    setup() {
      const view = useBreakpoints();
      const { project, getProject } = useStore();

      getProject('my-spotify-features');

      const loading = computed(() => project.loading);
      const error = computed(() => project.error);

      const titleImg = 'https://firebasestorage.googleapis.com/v0/b/my-portfolio-45469.appspot.com/o/public%2Fspotify%2Ftitle.png?alt=media&token=73b45898-aa0f-4c95-9491-d4f7bf5317a5';
      const audioFeatureImg = 'https://firebasestorage.googleapis.com/v0/b/my-portfolio-45469.appspot.com/o/public%2Fspotify%2Faudio-features.png?alt=media&token=8e2b94a7-5116-49ea-91e8-676180e476d5';
      const authFlowImg = 'https://firebasestorage.googleapis.com/v0/b/my-portfolio-45469.appspot.com/o/public%2Fspotify%2Fauth-flow.png?alt=media&token=60d6007e-dbff-417f-8dbb-38a1cd6d231f';
      const colorSchemeImg = 'https://firebasestorage.googleapis.com/v0/b/my-portfolio-45469.appspot.com/o/public%2Fspotify%2Fcolor-scheme.jpg?alt=media&token=07c52c19-64f6-4220-8775-7f6f4e1ef56f';
      const homepageImg = 'https://firebasestorage.googleapis.com/v0/b/my-portfolio-45469.appspot.com/o/public%2Fspotify%2Fhomepage.jpg?alt=media&token=d1c86aca-c91e-4125-a3e3-81ec80d7fea0';

      
      return {
        loading,
        error,
        view,
        project,
        titleImg,
        colorSchemeImg,
        homepageImg,
        authFlowImg,
        audioFeatureImg,
        authHandlerSnippet,
      };
    },
  });
</script>
