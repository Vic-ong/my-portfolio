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
              class="h-20 rounded-md"
            >
          </a>
        </div>
        <div>
          A web app that
          <b>
            calculates your virtual character's compatibility with the others and recommends the top 3 team pairings
          </b>
          so that your probability of completing a particular mission is favorable. The compatibility scoring is computed by determining the similarities between 2 characters. In this project, I wanted to explore how
          <a
            href="https://en.wikipedia.org/wiki/Lp_space#Statistics"
            target="_blank"
          >
            Lp space
          </a>
          and
          <a
            href="https://en.wikipedia.org/wiki/Cosine_similarity"
            target="_blank"
          >
            cosine similarity
          </a>
          can be applied in game developments.
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
          Similarity analysis is used in many applications today such as auto-correcting texts, searching similar restaurants and looking for partners with similar interests. It is commonly done by representing data in a vector of measurable features.
        </div>
        <div>
          Fun fact: the name "Paul The Octopus" is a tribute to a
          <a
            href="https://en.wikipedia.org/wiki/Paul_the_Octopus"
            target="_blank"
          >
            real-life celebrity octopus
          </a>
          🐙 who has correctly predicted 4 out of 6 outcomes of UEFA Euro 2008 and all of the outcomes of FIFA World Cup 2010!
        </div>
      </TextBody>
    </div>

    <div>
      <TextHeading>
        Features
      </TextHeading>
      <TextBody>
        <div>
          I’d like to create some interactivity that could engage the users in exploring how different skill sets change the recommendations.
        </div>
        <div>
          <TextList>
            Character creation system where users can personalized their character's skill set and skill levels
          </TextList>
          <TextList>
            Compatibility score calculations using the proposed algorithms
          </TextList>
          <TextList>
            Result display and character pairings recommendations
          </TextList>
          <TextList>
            The raw data listing all of the players' skill set
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
          Vite, Vue, Typescript, Tailwind CSS
        </div>
      </TextBody>
    </div>

    <div>
      <TextHeading>
        Details
      </TextHeading>
      <TextBody>
        <div>
          There are 3 objectives that the compatibility calculations need to adapt to. Thus, I made modifications on the computations based on a few assumptions for each mission. The base formula to calculate Lp space and cosine similarity as shown below.
        </div>
        <div class="flex justify-center">
          <img
            :src="formulaImg"
            class="md-above:h-24"
          >
        </div>

        <div>
          I will be using the sample character desribed in the image below as a point of reference for the rest of the discussions. As you can see, Jackson is a skilled magician with good creative capacity and people skills. However, he has little to no knowledge in hunting, engineering and medicine.
        </div>
        <div class="flex justify-center">
          <img
            :src="sampleCharacter"
            class="h-44"
          >
        </div>

        <div>
          <div class="heading-3">
            Objective 1: Finding partner(s) on similar skill levels
          </div>
          Since we’re interested in figuring characters that have the most similar skill set and skill levels to Jackson, Lp space is a good starting point as it calculates the distance between 2 vector spaces. Initially, I calculated the Euclidean distance (L-2 norm, p=2) and found that the scoring heavily penalizes characters that have different skill sets of similar level. After some iterations, I ended up using p=1.5 to relax the aforementioned penalty so characters in those cases can be considered.
        </div>
        <div>
          We can observe below that Juniper and Benyj both scores the highest relative to Jackson's character as they all have a very similar skill set and skill level. Although it isn't perfect and there's some discrepancy (hence the 76% score), it is the best outcome the algorithm could find within the list of characters.
        </div>
        <div class="flex justify-center">
          <img
            :src="result1"
            class="md-above:h-72"
          >
        </div>

        <div>
          <div class="heading-3">
            Objective 2: Best chance at surviving in the wilderness
          </div>
          This pairing should have the right skill set and create a relationship where they can learn from or teach each other to improve the group's survivability. The primary skills that should be taken into consideration for this scenario are hunting, engineering, creativity and medicine. I proposed using cosine similarity as it measures the directional similarity of 2 vector spaces from the origin. This would tell us that both of the characters have similar skill sets disregarding the skill levels.
        </div>
        <div>
          We can see that Sophia Marker is the best pairing because she is highly skilled in hunting and engineering which is what Jackson lacks. They are both, however, less proficient in medicine. Kiera would fulfill that gap but the lack of hunting and engineering skills does not seem like a good trade.
        </div>
        <div class="flex justify-center">
          <img
            :src="result2"
            class="md-above:h-72"
          >
        </div>

        <div>
          <div class="heading-3">
            Objective 3: Helping Harry Potter to defeat Voldemort
          </div>
          Given that the nature of the objective is likely the same as surviving in the wilderness, cosine similarity is also used for this compatibility calculation. I did, however, modify the primary skills considered to be magic, creativity and medicine since this is a battle of magicians.
        </div>
        <div>
          Eveline is recommended here because she makes up for Jackson's lower proficiency in creativity and medicine. Depending on the context, Marta would be a good fit if people skills are beneficial and Leon would be a good fit if engineering skills are beneficial.
        </div>
        <div class="flex justify-center">
          <img
            :src="result3"
            class="md-above:h-72"
          >
        </div>
      </TextBody>
    </div>
  </ProjectViewContainer>
</template>

<script lang="ts">
  import { defineComponent, computed } from 'vue';
  import { useStore } from '@/composables/store';
  import ProjectViewContainer from '@/components/ProjectViewContainer.vue';

  export default defineComponent({
    name: 'ProjectPaul',
    components: {
      ProjectViewContainer,
    },
    setup() {
      const { project, getProject } = useStore();

      getProject('paul-the-octopus');

      const loading = computed(() => project.loading);
      const error = computed(() => project.error);

      const formulaImg = 'https://firebasestorage.googleapis.com/v0/b/my-portfolio-45469.appspot.com/o/public%2Fpaul-the-octopus%2Fformula.png?alt=media&token=0991a6df-3eb8-4206-aaf8-d6e6abd3571e';
      const sampleCharacter = 'https://firebasestorage.googleapis.com/v0/b/my-portfolio-45469.appspot.com/o/public%2Fpaul-the-octopus%2Fprofile.png?alt=media&token=50a5511f-a5c4-4ebb-bd95-8ccc3acf5383';
      const titleImg = 'https://firebasestorage.googleapis.com/v0/b/my-portfolio-45469.appspot.com/o/public%2Fpaul-the-octopus%2Ftitle.png?alt=media&token=466820b7-766f-47ed-ae25-ad5f53dadebe';
      const result1 = 'https://firebasestorage.googleapis.com/v0/b/my-portfolio-45469.appspot.com/o/public%2Fpaul-the-octopus%2Fresult_1.png?alt=media&token=58db0072-f1bc-4488-9a81-42361455055f';
      const result2 = 'https://firebasestorage.googleapis.com/v0/b/my-portfolio-45469.appspot.com/o/public%2Fpaul-the-octopus%2Fresult_2.png?alt=media&token=bf0fbb81-8f6f-4a8b-a4d5-183d6ad95b72';
      const result3 = 'https://firebasestorage.googleapis.com/v0/b/my-portfolio-45469.appspot.com/o/public%2Fpaul-the-octopus%2Fresult_3.png?alt=media&token=a0239301-10ad-4e36-b9e4-a3da3bb1d21c';

      return {
        loading,
        error,
        project,
        titleImg,
        formulaImg,
        sampleCharacter,
        result1,
        result2,
        result3,
      };
    },
  });
</script>
