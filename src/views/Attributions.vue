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
            Cover photos & illustrations
          </div>
          <a
            href="https://www.vecteezy.com/free-vector/savings"
            target="_blank"
          >
            Vecteezy
          </a>
        </div>

        <div>
          <div>
            Abstract photos
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
