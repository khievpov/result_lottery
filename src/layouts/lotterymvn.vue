<template>
  <q-card>
    <q-card-section>
      <div class="q-pa-md text-h6" style="max-width: 400px">
        លទ្ឋផល
        <span style="color: darkred">ឆ្នោត-មីងណាម</span>
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
          <q-tab class="text-primary" name="alarms" icon="alarms" label="ព្រឹក10:15" />
          <q-tab class="text-primary" name="alarms" icon="alarms" label="ថ្ងៃ1:45" />
        </q-tabs>
        <q-tabs v-model="tab" narrow-indicator dense>
          <q-tab class="text-primary" name="alarms" icon="alarms" label="ល្ងាច3:45" />
          <q-tab class="text-primary" name="alarms" icon="alarms" label="យប់5:45" />
          <q-tab class="text-primary" name="alarms" icon="alarms" label="យប់7:15 " />
        </q-tabs>
      </div>
      <div class="q-pa-md" style="max-width: 400px">
        <q-markup-table>
          <thead class="bg-primary q-pa-sm text-h6">
            <tr>
              <th class="text-left" style="color: white">ឆ្នោត-មីងណាម</th>
              <th class="text-center"></th>
              <th class="text-right" style="color: white">ព្រឹក10:15</th>
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
              <td class="text-center">11</td>
              <td class="text-right">098</td>
            </tr>
            <tr>
              <td class="text-left" style="color: darkblue">B</td>
              <td class="text-center">53</td>
              <td class="text-right">140</td>
            </tr>
            <tr>
              <td class="text-left" style="color: darkblue">C</td>
              <td class="text-center">40</td>
              <td class="text-right">531</td>
            </tr>
            <tr>
              <td class="text-left" style="color: darkblue">D</td>
              <td class="text-center">50</td>
              <td class="text-right">314</td>
            </tr>
            <tr>
              <td class="text-left" style="color: darkblue">F</td>
              <td class="text-center">18</td>
              <td class="text-right">475</td>
            </tr>
            <tr>
              <td class="text-left" style="color: darkblue">I</td>
              <td class="text-center">91</td>
              <td class="text-right">575</td>
            </tr>
            <tr>
              <td class="text-left" style="color: darkblue">N</td>
              <td class="text-center">24</td>
              <td class="text-right">166</td>
            </tr>
          </thead>
          <thead class="q-pa-ms text-h6">
            <tr>
              <th class="text-left"></th>
              <th class="text-right">1</th>
              <th class="text-right">6376</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">2</th>
              <th class="text-right">3540</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">3</th>
              <th class="text-right">3616</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">4</th>
              <th class="text-right">13353</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">5</th>
              <th class="text-right">69894</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">6</th>
              <th class="text-right">02219</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">7</th>
              <th class="text-right">48873</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">8</th>
              <th class="text-right">10833</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">9</th>
              <th class="text-right">60607</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">10</th>
              <th class="text-right">00593</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">11</th>
              <th class="text-right">77543</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">12</th>
              <th class="text-right">3039</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">13</th>
              <th class="text-right">59838</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">14</th>
              <th class="text-right">26361</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">15</th>
              <th class="text-right">26008</th>
            </tr>
          </thead>
        </q-markup-table>
      </div>
      <div class="q-pa-md" style="max-width: 400px">
        <q-markup-table>
          <thead class="bg-primary q-pa-sm text-h6">
            <tr>
              <th class="text-left" style="color: white">ឆ្នោត-មីងណាម</th>
              <th class="text-center"></th>
              <th class="text-right" style="color: white">ថ្ងៃ1:45</th>
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
              <td class="text-right">587</td>
            </tr>
            <tr>
              <td class="text-left" style="color: darkblue">B</td>
              <td class="text-center">10</td>
              <td class="text-right">765</td>
            </tr>
            <tr>
              <td class="text-left" style="color: darkblue">C</td>
              <td class="text-center">65</td>
              <td class="text-right">107</td>
            </tr>
            <tr>
              <td class="text-left" style="color: darkblue">D</td>
              <td class="text-center">15</td>
              <td class="text-right">076</td>
            </tr>
            <tr>
              <td class="text-left" style="color: darkblue">F</td>
              <td class="text-center">91</td>
              <td class="text-right">954</td>
            </tr>
            <tr>
              <td class="text-left" style="color: darkblue">I</td>
              <td class="text-center">45</td>
              <td class="text-right">411</td>
            </tr>
            <tr>
              <td class="text-left" style="color: darkblue">N</td>
              <td class="text-center">61</td>
              <td class="text-right">118</td>
            </tr>
          </thead>
          <thead class="q-pa-ms text-h6">
            <tr>
              <th class="text-left"></th>
              <th class="text-right">1</th>
              <th class="text-right">8768</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">2</th>
              <th class="text-right">4559</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">3</th>
              <th class="text-right">1984</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">4</th>
              <th class="text-right">81013</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">5</th>
              <th class="text-right">68883</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">6</th>
              <th class="text-right">48093</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">7</th>
              <th class="text-right">55903</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">8</th>
              <th class="text-right">09762</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">9</th>
              <th class="text-right">36311</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">10</th>
              <th class="text-right">97872</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">11</th>
              <th class="text-right">06657</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">12</th>
              <th class="text-right">96709</th>
            </tr>
          </thead>
        </q-markup-table>
      </div>
      <div class="q-pa-md" style="max-width: 400px">
        <q-markup-table>
          <thead class="bg-primary q-pa-sm text-h6">
            <tr>
              <th class="text-left" style="color: white">ឆ្នោត-មីងណាម</th>
              <th class="text-center"></th>
              <th class="text-right" style="color: white">ល្ងាច3:45</th>
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
              <td class="text-center">68</td>
              <td class="text-right">411</td>
            </tr>
            <tr>
              <td class="text-left" style="color: darkblue">B</td>
              <td class="text-center">96</td>
              <td class="text-right">239</td>
            </tr>
            <tr>
              <td class="text-left" style="color: darkblue">C</td>
              <td class="text-center">39</td>
              <td class="text-right">962</td>
            </tr>
            <tr>
              <td class="text-left" style="color: darkblue">D</td>
              <td class="text-center">99</td>
              <td class="text-right">623</td>
            </tr>
            <tr>
              <td class="text-left" style="color: darkblue">F</td>
              <td class="text-center">60</td>
              <td class="text-right">715</td>
            </tr>
            <tr>
              <td class="text-left" style="color: darkblue">I</td>
              <td class="text-center">63</td>
              <td class="text-right">388</td>
            </tr>
            <tr>
              <td class="text-left" style="color: darkblue">N</td>
              <td class="text-center">28</td>
              <td class="text-right">668</td>
            </tr>
          </thead>
          <thead class="q-pa-ms text-h6">
            <tr>
              <th class="text-left"></th>
              <th class="text-right">1</th>
              <th class="text-right">4020</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">2</th>
              <th class="text-right">2745</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">3</th>
              <th class="text-right">2284</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">4</th>
              <th class="text-right">70485</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">5</th>
              <th class="text-right">41094</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">6</th>
              <th class="text-right">21621</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">7</th>
              <th class="text-right">33927</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">8</th>
              <th class="text-right">04470</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">9</th>
              <th class="text-right">28992</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">10</th>
              <th class="text-right">32701</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">11</th>
              <th class="text-right">43105</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">12</th>
              <th class="text-right">76061</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">13</th>
              <th class="text-right">37934</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">14</th>
              <th class="text-right">85800</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">15</th>
              <th class="text-right">91726</th>
            </tr>
          </thead>
        </q-markup-table>
      </div>
      <div class="q-pa-md" style="max-width: 400px">
        <q-markup-table>
          <thead class="bg-primary q-pa-sm text-h6">
            <tr>
              <th class="text-left" style="color: white">ឆ្នោត-មីងណាម</th>
              <th class="text-center"></th>
              <th class="text-right" style="color: white">យប់5:45</th>
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
              <td class="text-left"></td>
              <td class="text-center">28</td>
              <td class="text-right">481</td>
            </tr>
            <tr>
              <td class="text-left"></td>
              <td class="text-center">82</td>
              <td class="text-right">952</td>
            </tr>
            <tr>
              <td class="text-left text-h2" style="color: darkblue">A</td>
              <td class="text-center">12</td>
              <td class="text-right">369</td>
            </tr>
            <tr>
              <td class="text-left"></td>
              <td class="text-center">42</td>
              <td class="text-right"></td>
            </tr>
            <tr>
              <td class="text-left" style="color: darkblue">B</td>
              <td class="text-center">84</td>
              <td class="text-right">530</td>
            </tr>
            <tr>
              <td class="text-left" style="color: darkblue">C</td>
              <td class="text-center">30</td>
              <td class="text-right">845</td>
            </tr>
            <tr>
              <td class="text-left" style="color: darkblue">D</td>
              <td class="text-center">80</td>
              <td class="text-right">453</td>
            </tr>
          </thead>
          <thead class="q-pa-ms text-h6">
            <tr>
              <th class="text-left"></th>
              <th class="text-right">1</th>
              <th class="text-right">03183</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">2</th>
              <th class="text-right">54199</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">3</th>
              <th class="text-right">56642</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">4</th>
              <th class="text-right">75533</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">5</th>
              <th class="text-right">03834</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">6</th>
              <th class="text-right">26147</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">7</th>
              <th class="text-right">45096</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">8</th>
              <th class="text-right">47726</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">9</th>
              <th class="text-right">87479</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">10</th>
              <th class="text-right">9488</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">11</th>
              <th class="text-right">0832</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">12</th>
              <th class="text-right">9749</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">13</th>
              <th class="text-right">5094</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">14</th>
              <th class="text-right">9987</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">15</th>
              <th class="text-right">3223</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">16</th>
              <th class="text-right">2746</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">17</th>
              <th class="text-right">0376</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">18</th>
              <th class="text-right">5554</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">19</th>
              <th class="text-right">9463</th>
            </tr>
          </thead>
        </q-markup-table>
      </div>
      <div class="q-pa-md" style="max-width: 400px">
        <q-markup-table>
          <thead class="bg-primary q-pa-sm text-h6">
            <tr>
              <th class="text-left" style="color: white">ឆ្នោត-មីងណាម</th>
              <th class="text-center"></th>
              <th class="text-right" style="color: white">យប់7:15</th>
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
              <td class="text-left"></td>
              <td class="text-center">12</td>
              <td class="text-right">632</td>
            </tr>
            <tr>
              <td class="text-left"></td>
              <td class="text-center">70</td>
              <td class="text-right">813</td>
            </tr>
            <tr>
              <td class="text-left text-h2" style="color: darkblue">A</td>
              <td class="text-center">14</td>
              <td class="text-right">950</td>
            </tr>
            <tr>
              <td class="text-left"></td>
              <td class="text-center">71</td>
              <td class="text-right"></td>
            </tr>
            <tr>
              <td class="text-left" style="color: darkblue">B</td>
              <td class="text-center">15</td>
              <td class="text-right">734</td>
            </tr>
            <tr>
              <td class="text-left" style="color: darkblue">C</td>
              <td class="text-center">34</td>
              <td class="text-right">157</td>
            </tr>
            <tr>
              <td class="text-left" style="color: darkblue">D</td>
              <td class="text-center">14</td>
              <td class="text-right">573</td>
            </tr>
          </thead>
          <thead class="q-pa-ms text-h6">
            <tr>
              <th class="text-left"></th>
              <th class="text-right">1</th>
              <th class="text-right">74946</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">2</th>
              <th class="text-right">85005</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">3</th>
              <th class="text-right">65502</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">4</th>
              <th class="text-right">41712</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">5</th>
              <th class="text-right">99549</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">6</th>
              <th class="text-right">14295</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">7</th>
              <th class="text-right">11422</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">8</th>
              <th class="text-right">74774</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">9</th>
              <th class="text-right">49367</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">10</th>
              <th class="text-right">5210</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">11</th>
              <th class="text-right">5306</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">12</th>
              <th class="text-right">1098</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">13</th>
              <th class="text-right">5547</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">14</th>
              <th class="text-right">1569</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">15</th>
              <th class="text-right">2014</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">16</th>
              <th class="text-right">9443</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">17</th>
              <th class="text-right">3596</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">18</th>
              <th class="text-right">3539</th>
            </tr>
            <tr>
              <th class="text-left"></th>
              <th class="text-right">19</th>
              <th class="text-right">4384</th>
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
  name: 'lotterymvnPage',
  setup() {
    return {
      date: ref('date'),
      tab: ref('mails'),
    }
  },
}
</script>
