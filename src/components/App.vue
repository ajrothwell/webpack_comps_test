<template>
  <div>
    <!-- <button @click="test()">Button</button> -->
    <!-- <br><br> -->
    <!-- <component :is="componentLoader" -->

    <h4 class="margin-sides-20">Badge from local .vue file:</h4>
    <badge_new class="margin-sides-20"
              :slots="{
                title: 'Badge from local .vue file',
                value: 'test local badge'
                }"
    />
    <br><br>

    <h4 class="margin-sides-20">Components from rollup_vue_6:</h4>


    <badge class="margin-sides-20"
          :slots="{
            title: 'Address or Intersection Found',
            value: 'test'
          }"
    />

    <external-link class="ib margin-sides-20"
                  :options="{
                    data: 'openmaps.phila.gov',
                    href: 'https://openmaps.phila.gov'
                    }"
    />

    <callout class="margin-sides-20"
            :slots="{
              text: 'Test Callout from rollup_vue_6',
            }"
            :options="{
              components: calloutComponents_01
            }"
    />

    <any-header class="margin-sides-20"
                  :options="{
                      headerType: 'h1'
                  }"
                  :slots="{
                      text: 'test h1 text'
                  }"
    />

    <address-input class="margin-sides-20"
                  :widthFromConfig="415"
                  :placeholder="null"
    >
    </address-input>

    <horizontal-table class="margin-20 medium-10"
                      :slots="horizontalTable_01_Slots"
                      :options="horizontalTable_01_Options"
    />

    <div class="margin-sides-20 component-label">vertical-table:</div>
      <vertical-table
        class="margin-20 margin-bottom-60 medium-8"
        :slots="{
          fields: [
            {
              label: 'address',
              value: function(state) {
                return state.geocode.data.properties.street_address || '';
              },
            },
            {
              label: 'opa #',
              value: function(state) {
                return state.geocode.data.properties.opa_account_num;
              },
            },
            {
              label: 'owner',
              value: function(state) {
                return state.sources.opa.data.owner_1;
              },
            },
          ]
        }"
        :options="{
          id: 'verticalTableId',
          dataSources: ['opa'],
          export: {
            formatButtons: {
              'csv': 'CSV',
              'pdf': 'PDF'
            },
            file: function(state) { return state.geocode.data.properties.opa_account_num + '_opaData'; },
            introLines: [
              function(state) { return state.geocode.data.properties.opa_account_num; },
            ],
          },
          externalLink: {
            action: function() {
              return 'See more';
            },
            name: 'Atlas',
            href: 'https://atlas.phila.gov'
          }
        }"
      />

  </div>
</template>

<script>

  import Badge_new from './Badge_new.vue';

  import AnyHeader from 'rollup_vue_6/src/components/AnyHeader/AnyHeader.vue';
  import ExternalLink from 'rollup_vue_6/src/components/ExternalLink/ExternalLink.vue';
  import Badge from 'rollup_vue_6/src/components/Badge/Badge.vue';
  import AddressInput from 'rollup_vue_6/src/components/AddressInput/AddressInput.vue';
  import Callout from 'rollup_vue_6/src/components/Callout/Callout.vue';
  import HorizontalTable from 'rollup_vue_6/src/components/HorizontalTable/HorizontalTable.vue';
  import HorizontalTableRow from 'rollup_vue_6/src/components/HorizontalTableRow/HorizontalTableRow.vue';
  import PopoverLink from 'rollup_vue_6/src/components/PopoverLink/PopoverLink.vue';
  import VerticalTable from 'rollup_vue_6/src/components/VerticalTable/VerticalTable.vue';

  // import AnyHeader from '@cityofphiladelphia/phila-vue-comps/src/components/AnyHeader.vue';
  // import ExternalLink from '@cityofphiladelphia/phila-vue-comps/src/components/ExternalLink.vue';
  // import Badge from '@cityofphiladelphia/phila-vue-comps/src/components/Badge.vue';
  // import AddressInput from '@cityofphiladelphia/phila-vue-comps/src/components/AddressInput.vue';
  // import Callout from '@cityofphiladelphia/phila-vue-comps/src/components/Callout.vue';
  // import HorizontalTable from '@cityofphiladelphia/phila-vue-comps/src/components/HorizontalTable.vue';
  // import HorizontalTableRow from '@cityofphiladelphia/phila-vue-comps/src/components/HorizontalTableRow.vue';
  // import PopoverLink from '@cityofphiladelphia/phila-vue-comps/src/components/PopoverLink.vue';
  // import VerticalTable from '@cityofphiladelphia/phila-vue-comps/src/components/VerticalTable.vue';


  export default {

    components: {
      // ExternalLink: () => import('../../node_modules/rollup_test/src/components/ExternalLink.vue'),
      AnyHeader,
      ExternalLink,
      Badge,
      Badge_new,
      AddressInput,
      Callout,
      HorizontalTable,
      HorizontalTableRow,
      PopoverLink,
      VerticalTable
    },
    data() {
      const data = {
        // useLink: false
        calloutComponents_01: [
          {
            type: 'badge',
            slots: {
              title: 'badge inside callout',
              value: 'badge in callout value'
            }
          }
        ],
        horizontalTable_01_Options: {
          id: 'testHorizTable_01',
          export: {
            formatButtons: {
              'csv': 'CSV',
              'pdf': 'PDF'
            },
            file: function(state) { return state.geocode.data.properties.li_address_key + '_BusinessLicenses'; },
            introLines: [
              function(state) { return state.geocode.data.properties.li_address_key; },
            ],
          },
          totalRow: {
            enabled: false,
          },
          limit: 5,
          filters: [
            {
              type: 'time',
              getValue: function(item) {
                return item['mostrecentissuedate'];
              },
              label: 'From the last',
              values: [
                {
                  label: '30 days',
                  value: '30',
                  unit: 'days',
                  direction: 'subtract',
                },
                {
                  label: '90 days',
                  value: '90',
                  unit: 'days',
                  direction: 'subtract',
                },
                {
                  label: 'year',
                  value: '1',
                  unit: 'years',
                  direction: 'subtract',
                }
              ]
            }
          ],
          fields: [
            {
              label: 'MostRecentIssueDate',
              value: function(state, item){
                return item.mostrecentissuedate;
                // return item['mostrecentissuedate'];
              },
              transforms: [
                'date'
              ]
            },
            {
              label: 'LicenseNumber',
              value: function(state, item){
                return item.licensenum;
              }
            },
            {
              label: 'LicenseType',
              value: function(state, item){
                return item['licensetype'];
              }
            },
            {
              label: 'BusinessName',
              value: function(state, item){
                return item['business_name'];
              }
            },
          ],
          externalLink: {
            action: function(count) {
              return 'See ' + count + ' older permits at L&I Property History';
            },
            name: 'L&I Property History',
            href: function(state) {
              return 'http://li.phila.gov/';
            }
          }
        },
        horizontalTable_01_Slots: {
          title: 'Business Licenses',
          // items: []
          items: function(state) {
            var data;
            if (state.sources.liBusinessLicenses.data) {
              data = state.sources.liBusinessLicenses.data.rows
            }
            return data;
          },
        },
      }
      return data;
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

<style scoped>
#app-root {
  height: 100%
}
#components-root {
  padding: 20px;
  height: 90%;
  overflow-y: auto;
}
.component-label {
  font-size: 20px;
}
.margin-sides-20 {
  display: block;
  margin-left: 20px;
  margin-right: 20px;
}
.margin-20 {
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
}
.margin-bottom-60 {
  margin-bottom: 60px !important;
}
.ib {
  display: inline-block;
}
</style>
