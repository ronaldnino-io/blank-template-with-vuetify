<template>
  <v-container
    id="regular-tables"
    fluid
    tag="section"
  >
    <v-row justify="end">
      <v-col
        cols="12"
        md="4"
      >
        <v-text-field
          v-model="search"
          class="purple-input"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col
        cols="12"
        md="12"
      >
        <v-card
          elevation="5"
        >
          <v-card-text>
            <v-data-table
              :headers="headers"
              :items="customers"
              :search="search"
            >
              <template v-slot:item.created_at="{ item }">
                {{ get_date_from_timestamp(item.created_at) }}
              </template>
              <template v-slot:item.id="{ item }">
                <v-btn
                  class="ma-2"
                  color="primary"
                  depressed
                  @click="go_to_customer_detal(item.id)"
                >
                  Details
                  <v-icon
                    dark
                    right
                  >
                    mdi-magnify-plus
                  </v-icon>
                </v-btn>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  import { Auth } from 'aws-amplify'
  import axios from 'axios'
  export default {
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Name',
            align: 'start',
            sortable: true,
            value: 'name',
          },
          { text: 'Created', value: 'created_at', sortable: true },
          { text: 'Action', value: 'id', sortable: false },
        ],
        customers: [],
      }
    },
    mounted () {
      this.get_customers()
    },
    methods: {
      async get_customers () {
        const session = await Auth.currentSession()
        const jwt = session.idToken.jwtToken
        axios.get('/Stage/customers', { headers: { Authorization: `Bearer ${jwt}` } }).then(
          (response) => {
            var data = response.data
            this.customers = data
            console.log(this.customers)
          },
          (error) => {
            var status = error.response
            console.log(status)
            this.items = []
          })
      },
      go_to_customer_detal (itemId) {
        this.$router.push('/customer/' + itemId)
      },
      get_date_from_timestamp (timestamp) {
        const createddate = new Date(timestamp / 1000)
        console.log(createddate)
        return createddate.toISOString()
      },
    },

  }
</script>
