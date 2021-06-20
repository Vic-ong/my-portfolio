/* eslint-disable vue/component-definition-name-casing */
import { App } from 'vue';
import PageContainer from '@/components/PageContainer.vue';
import PageTitle from '@/components/PageTitle.vue';
import PageContent from '@/components/PageContent.vue';
import Divider from '@/components/Divider.vue';
import TextHeading from '@/components/TextHeading.vue';
import TextBody from '@/components/TextBody.vue';
import TextList from '@/components/TextList.vue';
import CodeContainer from '@/components/CodeContainer.vue';
import CodeBlock from '@/components/CodeBlock.vue';

export const registerComponents = (app: App): void => {
  app.component('PageContainer', PageContainer);
  app.component('PageTitle', PageTitle);
  app.component('PageContent', PageContent);
  app.component('Divider', Divider);
  app.component('TextHeading', TextHeading);
  app.component('TextBody', TextBody);
  app.component('TextList', TextList);
  app.component('CodeContainer', CodeContainer);
  app.component('CodeBlock', CodeBlock);
};
