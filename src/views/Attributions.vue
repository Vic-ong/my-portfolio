<template>
  <PageContainer>
    <PageTitle>
      Attributions
    </PageTitle>
    <PageContent>
      <div class="text-center space-y-7">
        <div>
          <div>
            Icons & svgs
          </div>
          <a
            href="https://unsplash.com/"
            target="_blank"
          >
            Flaticon
          </a>
        </div>

        <div>
          <div>
            Photos to aid descriptions
          </div>
          <a
            href="https://unsplash.com/"
            target="_blank"
          >
            Unsplash
          </a>
        </div>
      </div>
    </PageContent>
  </PageContainer>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'Attributions',
  });
</script>
