<template>
  <PageContainer>
    <PageTitle>
      Attributions
    </PageTitle>
    <PageContent>
      <div class="text-center space-y-7">
        <div>
          <div>
            Icons and svgs
          </div>
          <a
            href="https://www.flaticon.com/"
            target="_blank"
          >
            Flaticon
          </a>
        </div>

        <div>
          <div>
            Photos to support descriptions
          </div>
          <div>
            <a
              href="https://unsplash.com/"
              target="_blank"
            >
              Unsplash
            </a>
          </div>
          <div>
            <a
              href="https://giphy.com/"
              target="_blank"
            >
              Giphy
            </a>
          </div>
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
