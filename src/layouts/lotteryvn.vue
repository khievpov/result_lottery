<template>
  <q-card>
    <q-card-section>
      <div class="q-pa-md text-h6" style="max-width: 400px">
        លទ្ឋផល
        <span style="color: darkred">ឆ្នោតយួន</span>
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
        <q-tabs v-model="tab" narrow-indicator dense>
          <q-tab class="text-primary" name="mails" icon="mails" label="ទាំងអស់" />
          <q-tab class="text-primary" name="alarms" icon="alarms" label="ល្ងាច 4:30" />
          <q-tab class="text-primary" name="alarms" icon="alarms" label="យប់ 6:30" />
        </q-tabs>
      </div>
      <div class="q-pa-md" style="max-width: 400px">
        <q-markup-table>
          <thead class="bg-primary q-pa-sm text-h6">
            <tr>
              <th class="text-left" style="color: white">ឆ្នោតយួន</th>
              <th class="text-center"></th>
              <th class="text-right" style="color: white">ល្ងាច 4:30</th>
            </tr>
          </thead>
          <thead class="q-pa-sm text-h6">
            <tr>
              <th class="text-left" style="color: darkblue">ចេញថ្ងៃ</th>
              <th class="text-center"></th>
              <th class="text-right" style="color: darkred">26-01-2026</th>
            </tr>
          </thead>
          <thead class="q-pa-sm text-h5">
            <tr>
              <td class="text-left" style="color: darkblue">A</td>
              <td class="text-center">20</td>
              <td class="text-right">180</td>
            </tr>
            <tr>
              <td class="text-left" style="color: darkblue">B</td>
              <td class="text-center">83</td>
              <td class="text-right">111</td>
            </tr>
            <tr>
              <td class="text-left" style="color: darkblue">C</td>
              <td class="text-center">11</td>
              <td class="text-right">831</td>
            </tr>
            <tr>
              <td class="text-left" style="color: darkblue">D</td>
              <td class="text-center">81</td>
              <td class="text-right">331</td>
            </tr>
            <tr>
              <td class="text-left" style="color: darkblue">F</td>
              <td class="text-center">57</td>
              <td class="text-right">943</td>
            </tr>
            <tr>
              <td class="text-left" style="color: darkblue">I</td>
              <td class="text-center">57</td>
              <td class="text-right">943</td>
            </tr>
            <tr>
              <td class="text-left" style="color: darkblue">N</td>
              <td class="text-center">80</td>
              <td class="text-right">906</td>
            </tr>
            <tr>
              <td class="text-left" style="color: darkblue">K</td>
              <td class="text-center">62</td>
              <td class="text-right">462</td>
            </tr>
          </thead>
          <thead class="q-pa-ms text-h6">
            <tr>
              <th class="text-left"></th>
              <th class="text-right">1</th>
              <th class="text-right">1412</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">2</th>
              <th class="text-right">8086</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">3</th>
              <th class="text-right">7271</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">4</th>
              <th class="text-right">6667</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">5</th>
              <th class="text-right">64498</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">6</th>
              <th class="text-right">65882</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">7</th>
              <th class="text-right">89492</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">8</th>
              <th class="text-right">57156</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">9</th>
              <th class="text-right">00989</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">10</th>
              <th class="text-right">49158</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">11</th>
              <th class="text-right">85259</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">12</th>
              <th class="text-right">66334</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">13</th>
              <th class="text-right">84631</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">14</th>
              <th class="text-right">56143</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">15</th>
              <th class="text-right">84622</th>
            </tr>
          </thead>
        </q-markup-table>
      </div>

      <div class="q-pa-md" style="max-width: 400px">
        <q-markup-table>
          <thead class="bg-primary q-pa-sm text-h6">
            <tr>
              <th class="text-left" style="color: white">ឆ្នោតយួន</th>
              <th class="text-center"></th>
              <th class="text-right" style="color: white">ល្ងាច 6:30</th>
            </tr>
          </thead>
          <thead class="q-pa-sm text-h6">
            <tr>
              <th class="text-left" style="color: darkblue">ចេញថ្ងៃ</th>
              <th class="text-center"></th>
              <th class="text-right" style="color: darkred">26-01-2026</th>
            </tr>
          </thead>
          <thead class="q-pa-sm text-h5">
            <tr>
              <td class="text-left"></td>
              <td class="text-center">76</td>
              <td class="text-right">801</td>
            </tr>
            <tr>
              <td class="text-left"></td>
              <td class="text-center">47</td>
              <td class="text-right">295</td>
            </tr>
            <tr>
              <td class="text-left text-h2" style="color: darkblue">A</td>
              <td class="text-center">21</td>
              <td class="text-right">993</td>
            </tr>
            <tr>
              <td class="text-left"></td>
              <td class="text-center">77</td>
              <td class="text-right"></td>
            </tr>
            <tr>
              <td class="text-left" style="color: darkblue">B</td>
              <td class="text-center">24</td>
              <td class="text-right">121</td>
            </tr>
            <tr>
              <td class="text-left" style="color: darkblue">C</td>
              <td class="text-center">21</td>
              <td class="text-right">241</td>
            </tr>
            <tr>
              <td class="text-left" style="color: darkblue">D</td>
              <td class="text-center">21</td>
              <td class="text-right">412</td>
            </tr>
          </thead>
          <thead class="q-pa-ms text-h6">
            <tr>
              <th class="text-left"></th>
              <th class="text-right">1</th>
              <th class="text-right">96394</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">2</th>
              <th class="text-right">18979</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">3</th>
              <th class="text-right">53028</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">4</th>
              <th class="text-right">17851</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">5</th>
              <th class="text-right">36689</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">6</th>
              <th class="text-right">93457</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">7</th>
              <th class="text-right">43975</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">8</th>
              <th class="text-right">85524</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">9</th>
              <th class="text-right">91533</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">10</th>
              <th class="text-right">3309</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">11</th>
              <th class="text-right">9602</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">12</th>
              <th class="text-right">5037</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">13</th>
              <th class="text-right">3432</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">14</th>
              <th class="text-right">2740</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">15</th>
              <th class="text-right">8739</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">16</th>
              <th class="text-right">6150</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">17</th>
              <th class="text-right">3804</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">18</th>
              <th class="text-right">2269</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">19</th>
              <th class="text-right">4778</th>
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
  name: 'lotteryvnPage',
  setup() {
    return {
      date: ref('date'),
      tab: ref('mails'),
    }
  },
}
</script>
