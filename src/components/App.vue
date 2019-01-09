<template>
  <div>
    <button @click="test()">Button</button>
    <!-- <component :is="componentLoader" -->
    <external-link class="ib"
               :options="{
                  data: 'openmaps.phila.gov',
                  href: 'https://openmaps.phila.gov'
               }"
    />
    <!-- v-if="false" -->

    <badge
      :slots="{
        title: 'Address or Intersection Found',
        value: 'test'
      }"
    />

    <!-- <callout
      :slots="{
        text: 'Address or Intersection Found',
      }"
    /> -->

  </div>
</template>

<script>

  import { ExternalLink } from 'comps_test';
  import { Badge } from 'comps_test';

  export default {

    components: {
      // ExternalLink: () => import('../../node_modules/rollup_test/src/components/ExternalLink.vue'),
      ExternalLink,
      Badge,
      // Callout
    },
    data() {
      const test = {
        useLink: false
      }
      return test;
    },
    // props: {
    //   componentType: {
    //     type: String,
    //     default: () => null
    //   }
    // },
    computed: {
    //   componentLoader () {
    //     if (!this.$data.useLink) {
    //       return;
    //     } else {
    //       // console.log('else')
    //       return () => import('../../node_modules/rollup_test/src/components/ExternalLink.vue').then(console.log('after import'))
    //     }
    //   }
    },
    methods: {
      test() {
        // console.log('test, this.$data:', this.$data);
        this.$data.useLink = true;
      }
    }
  }

</script>
