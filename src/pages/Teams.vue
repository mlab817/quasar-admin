<template>
  <q-page class="q-pa-sm">
    <q-card class="q-mt-lg table-bg">
      <q-card-section>
        <div class="text-h6 text-white">
          Demon Slayer Corps: Members
          <q-btn @click="inviteToTeam" label="Create" color="blue" class="float-right text-capitalize shadow-3" icon="add"/>
        </div>
      </q-card-section>
      <q-separator color="white"/>
      <q-card-section class="q-pa-none">
        <q-table dark class="table-bg" :data="users" :columns="columns2" hide-bottom>
          <template v-slot:body-cell-Name="props">
            <q-td :props="props">
              <q-item style="max-width: 420px">
                <q-item-section avatar>
                  <q-avatar>
                    <img :src="props.row.avatar">
                  </q-avatar>
                </q-item-section>

                <q-item-section>
                  <q-item-label>{{ props.row.name }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-td>
          </template>
          <template v-slot:body-cell-Action="props">
            <q-td :props="props">
              <q-btn icon="edit" size="sm" flat dense/>
              <q-btn icon="delete" size="sm" class="q-ml-sm" flat dense/>
            </q-td>
          </template>
          <template v-slot:body-cell-Progress="props">
            <q-td :props="props">
              <q-linear-progress dark :color="getColor(props.row.progress)" :value="props.row.progress/100"
                                 class="q-mt-md"/>
            </q-td>
          </template>
        </q-table>
      </q-card-section>
    </q-card>

  </q-page>
</template>

<script>
export default {
  name: "Tables",
  computed: {
    teams() {
      return this.$store.state.teams.teams
    },
    users() {
      return this.$store.state.users.users
    }
  },
  data() {
    return {
      columns2: [
        {name: 'Name', label: 'Name', field: 'name', sortable: true, align: 'left'},
        {name: 'email', label: 'Email', field: 'email', sortable: true, align: 'left'},
        {name: 'Created Date', label: 'Date Added', field: 'Created_Date', sortable: true, align: 'left'},
        {name: 'CountProject', label: 'No. of Projects', field: 'CountProject', sortable: true, align: 'left'},
        {name: 'Action', label: '', field: 'Action', sortable: false, align: 'center'}
      ],
    }
  },
  methods: {
    inviteToTeam() {
      this.$q.dialog({
        title: 'Invite User',
        message: 'Please input the email of the user you want to invite',
        dark: true,
        cancel: true,
        prompt: {
          model: '',
          isValid: val => !!val
        }
      }).onOk(email => {
        this.$q.loading.show()
        setTimeout(() => {
          this.$q.loading.hide()
          this.$q.notify({
            type: 'positive',
            message: 'Successfully invited ' + email,
            position: 'top'
          })
        }, 1000)
      })
    }
  }
}
</script>

<style>

.table-bg {
  background-color: #162b4d;
}
</style>
