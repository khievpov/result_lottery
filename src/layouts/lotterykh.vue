<template>
  <q-card>
    <q-card-section>
      <div class="q-pa-md text-h6" style="max-width: 400px">
        លទ្ឋផល
        <span style="color: darkred">ឆ្នោតខ្មែរ</span>
        សម្រាប់ថ្ងៃទី
      </div>
      <div class="absolute-top-right q-ma-md q-pa-md">
        <q-spinner-radio color="red" size="2em" />
      </div>

      <div class="q-pa-md" style="max-width: 400px">
        <q-input filled v-model="date" mask="date" :rules="['date']">
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer" style="color: darkred">
              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                <q-date v-model="date">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
      <div class="q-gutter-y-md q-pa-md" style="max-width: 400px">
        <q-tabs v-model="tab" narrow-indicator dense class="text-primary">
          <q-tab name="mails" icon="mails" label="ទាំងអស់" />
          <q-tab name="alarms" icon="alarms" label="ខ្មែរ10:35" />
          <q-tab name="alarms" icon="alarms" label="ខ្មែរ13:00" />
        </q-tabs>
        <q-tabs v-model="tab" narrow-indicator dense class="text-primary">
          <q-tab name="alarms" icon="alarms" label="ខ្មែរ15:45" />
          <q-tab name="alarms" icon="alarms" label="ខ្មែរ18:00" />
          <q-tab name="alarms" icon="alarms" label="ខ្មែរ19:45" />
        </q-tabs>
      </div>

      <div class="q-pa-md" style="max-width: 400px">
        <q-markup-table>
          <thead class="bg-primary q-pa-sm text-h6">
            <tr>
              <th class="text-left" style="color: white">ឆ្នោតខ្មែរ</th>
              <th class="text-center"></th>
              <th class="text-right" style="color: white">ខ្មែរ10:35</th>
            </tr>
          </thead>
          <thead class="q-pa-sm text-h6">
            <tr>
              <th class="text-left" style="color: darkblue">ចេញថ្ងៃ</th>
              <th class="text-center"></th>
              <th class="text-right" style="color: darkred">29-01-2026</th>
            </tr>
          </thead>
          <thead class="q-pa-sm text-h5">
            <tr>
              <td class="text-left" style="color: darkblue">A</td>
              <td class="text-center">57</td>
              <td class="text-right">666</td>
            </tr>
            <tr>
              <td class="text-left" style="color: darkblue">B</td>
              <td class="text-center">46</td>
              <td class="text-right">728</td>
            </tr>
            <tr>
              <td class="text-left" style="color: darkblue">C</td>
              <td class="text-center">41</td>
              <td class="text-right">166</td>
            </tr>
            <tr>
              <td class="text-left" style="color: darkblue">D</td>
              <td class="text-center">91</td>
              <td class="text-right">440</td>
            </tr>
          </thead>
        </q-markup-table>
      </div>
      <div class="q-pa-md" style="max-width: 400px">
        <q-markup-table>
          <thead class="bg-primary q-pa-sm text-h6">
            <tr>
              <th class="text-left" style="color: white">ឆ្នោតខ្មែរ</th>
              <th class="text-center"></th>
              <th class="text-right" style="color: white">ខ្មែរ13:00</th>
            </tr>
          </thead>
          <thead class="q-pa-sm text-h6">
            <tr>
              <th class="text-left" style="color: darkblue">ចេញថ្ងៃ</th>
              <th class="text-center"></th>
              <th class="text-right" style="color: darkred">29-01-2026</th>
            </tr>
          </thead>
          <thead class="q-pa-sm text-h5">
            <tr>
              <td class="text-left" style="color: darkblue">A</td>
              <td class="text-center">82</td>
              <td class="text-right">518</td>
            </tr>
            <tr>
              <td class="text-left" style="color: darkblue">B</td>
              <td class="text-center">18</td>
              <td class="text-right">591</td>
            </tr>
            <tr>
              <td class="text-left" style="color: darkblue">C</td>
              <td class="text-center">01</td>
              <td class="text-right">992</td>
            </tr>
            <tr>
              <td class="text-left" style="color: darkblue">D</td>
              <td class="text-center">40</td>
              <td class="text-right">171</td>
            </tr>
          </thead>
        </q-markup-table>
      </div>
      <div class="q-pa-md" style="max-width: 400px">
        <q-markup-table>
          <thead class="bg-primary q-pa-sm text-h6">
            <tr>
              <th class="text-left" style="color: white">ឆ្នោតខ្មែរ</th>
              <th class="text-center"></th>
              <th class="text-right" style="color: white">ខ្មែរ15:45</th>
            </tr>
          </thead>
          <thead class="q-pa-sm text-h6">
            <tr>
              <th class="text-left" style="color: darkblue">ចេញថ្ងៃ</th>
              <th class="text-center"></th>
              <th class="text-right" style="color: darkred">29-01-2026</th>
            </tr>
          </thead>
          <thead class="q-pa-sm text-h5">
            <tr>
              <td class="text-left" style="color: darkblue">A</td>
              <td class="text-center">67</td>
              <td class="text-right">110</td>
            </tr>
            <tr>
              <td class="text-left" style="color: darkblue">B</td>
              <td class="text-center">74</td>
              <td class="text-right">772</td>
            </tr>
            <tr>
              <td class="text-left" style="color: darkblue">C</td>
              <td class="text-center">36</td>
              <td class="text-right">522</td>
            </tr>
            <tr>
              <td class="text-left" style="color: darkblue">D</td>
              <td class="text-center">01</td>
              <td class="text-right">729</td>
            </tr>
          </thead>
        </q-markup-table>
      </div>
      <div class="q-pa-md" style="max-width: 400px">
        <q-markup-table>
          <thead class="bg-primary q-pa-sm text-h6">
            <tr>
              <th class="text-left" style="color: white">ឆ្នោតខ្មែរ</th>
              <th class="text-center"></th>
              <th class="text-right" style="color: white">ខ្មែរ18:00</th>
            </tr>
          </thead>
          <thead class="q-pa-sm text-h6">
            <tr>
              <th class="text-left" style="color: darkblue">ចេញថ្ងៃ</th>
              <th class="text-center"></th>
              <th class="text-right" style="color: darkred">29-01-2026</th>
            </tr>
          </thead>
          <thead class="q-pa-sm text-h5">
            <tr>
              <td class="text-left" style="color: darkblue">A</td>
              <td class="text-center">10</td>
              <td class="text-right">774</td>
            </tr>
            <tr>
              <td class="text-left" style="color: darkblue">B</td>
              <td class="text-center">21</td>
              <td class="text-right">174</td>
            </tr>
            <tr>
              <td class="text-left" style="color: darkblue">C</td>
              <td class="text-center">08</td>
              <td class="text-right">838</td>
            </tr>
            <tr>
              <td class="text-left" style="color: darkblue">D</td>
              <td class="text-center">58</td>
              <td class="text-right">407</td>
            </tr>
          </thead>
        </q-markup-table>
      </div>
      <div class="q-pa-md" style="max-width: 400px">
        <q-markup-table>
          <thead class="bg-primary q-pa-sm text-h6">
            <tr>
              <th class="text-left" style="color: white">ឆ្នោតខ្មែរ</th>
              <th class="text-center"></th>
              <th class="text-right" style="color: white">ខ្មែរ19:45</th>
            </tr>
          </thead>
          <thead class="q-pa-sm text-h6">
            <tr>
              <th class="text-left" style="color: darkblue">ចេញថ្ងៃ</th>
              <th class="text-center"></th>
              <th class="text-right" style="color: darkred">29-01-2026</th>
            </tr>
          </thead>
          <thead class="q-pa-sm text-h5">
            <tr>
              <td class="text-left" style="color: darkblue">A</td>
              <td class="text-center">43</td>
              <td class="text-right">951</td>
            </tr>
            <tr>
              <td class="text-left" style="color: darkblue">B</td>
              <td class="text-center">16</td>
              <td class="text-right">591</td>
            </tr>
            <tr>
              <td class="text-left" style="color: darkblue">C</td>
              <td class="text-center">93</td>
              <td class="text-right">136</td>
            </tr>
            <tr>
              <td class="text-left" style="color: darkblue">D</td>
              <td class="text-center">90</td>
              <td class="text-right">534</td>
            </tr>
          </thead>
        </q-markup-table>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'lotterykhPage',
  setup() {
    return {
      date: ref('date'),
      tab: ref('mails'),
    }
  },
}
</script>
