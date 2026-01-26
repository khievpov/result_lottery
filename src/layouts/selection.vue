<template>
  <div class="q-pa-md">
    <q-card>
      <q-card-section>
        <div class="text-h5">
          <h5>
            លទ្ឋផល
            <span style="color: darkred">ឆ្នោតយួន</span>
            សម្រាប់ថ្ងៃទី
          </h5>
        </div>

        <div class="q-pa-md" style="max-width: 300px">
          <q-input outlined v-model="text" :dense="dense">
            <template v-slot:prepend>
              <!-- <q-icon name="event" /> -->
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                  <q-date v-model="date" mask="YYYY-MM-DD" color="primary">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>

        <div class="q-pa-md q-gutter-sm">
          <q-btn push color="primary" label="ទាំងអស់" />
          <q-btn push color="primary" label="ល្ងាច 4:30" />
          <q-btn push color="primary" label="យប់ 6:30" />
        </div>
        <div class="q-pa-md">
          <q-table :rows="rows" :columns="columns" row-key="name" />
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'SelectionPage',
  setup() {
    return {
      columns,
      rows,
    }
  },
}
const columns = [
  {
    name: 'name',
    required: true,
    label: 'ឆ្នោតយួន',
    align: 'left',
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: false,
  },
  {
    align: 'center',
    // label: 'Calories',
    field: 'calories',
    sortable: false,
  },
  {
    name: 'fat',
    label: 'ល្ងាច 4:30',
    field: 'fat',
    sortable: false,
  },
]
const rows = [
  {
    name: 'ចេញថ្ងៃ',
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: '14%',
    iron: '1%',
  },
  {
    name: 'A',
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: '8%',
    icon: '1%',
  },
  {
    name: 'B',
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: '8%',
    icon: '1%',
  },
]
</script>
<script setup></script>
