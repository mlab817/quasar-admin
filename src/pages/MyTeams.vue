<template>
  <q-page class="q-pa-sm">
    <q-card dark class="q-mt-lg table-bg">
      <q-card-section>
        <div class="text-h6 text-white">
          My Teams
          <q-btn @click="createTeam" label="Create" color="blue" class="float-right text-capitalize shadow-3" icon="add"/>
        </div>
      </q-card-section>
      <q-separator color="white"/>
      <q-card-section class="q-pa-none">
        <q-table wrap-cells dark class="table-bg" :data="teams" :columns="columns" hide-bottom @row-click="rowClick">
          <template v-slot:body-cell-avatar="props">
            <q-td :props="props">
              <q-avatar color="white">
                <img :src="props.row.avatar">
              </q-avatar>
            </q-td>
          </template>
          <template v-slot:body-cell-roles="props">
            <q-td :props="props">
              <q-badge v-for="(role, index) in props.row.roles" :key="index">
                {{ role }}
              </q-badge>
            </q-td>
          </template>
          <template v-slot:body-cell-members="props">
            <q-td :props="props">
              <q-badge v-for="(member, index) in props.row.members" :key="index">
                {{ member }}
              </q-badge>
            </q-td>
          </template>
          <template v-slot:body-cell-actions="props">
            <q-td :props="props">
              <q-btn dark icon="edit" size="sm" flat dense/>
              <q-btn dark icon="delete" size="sm" class="q-ml-sm" flat dense/>
            </q-td>
          </template>
        </q-table>
      </q-card-section>
    </q-card>

  </q-page>
</template>

<script>
  export default {
    name: 'MyTeams',
    computed: {
      teams() {
        return this.$store.state.teams.teams
      }
    },
    data() {
      return {
        columns: [
          {
            name: 'avatar',
            label: 'Avatar',
            field: 'avatar',
            align: 'center'
          },
          {
            name: 'name',
            label: 'Name',
            field: 'name',
            align: 'center'
          },
          {
            name: 'roles',
            label: 'Roles',
            field: 'roles',
            align: 'center'
          },
          {
            name: 'members',
            label: 'Members',
            field: 'members',
            align: 'center'
          },
          {
            name: 'actions',
            label: '',
            field: 'actions',
            align: 'center'
          }
        ]
      }
    },
    methods: {
      rowClick(evt, row) {
        alert(JSON.stringify(row))
        this.$router.push('/Teams')
      }
    }
  }
</script>
