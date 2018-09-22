<template>
<div class="jumbotron">
  <headers></headers>
  <div  v-if='this.forswitch' >
    <div class="container" id="forform">
      <h3 id="subtitle">ようこそ　旅仲間募集掲示板へ</h3>
      <p>2018年１０月オープン　旅仲間を探す人のための新しい掲示板です。<br>
         検索機能を使って、条件にマッチする旅仲間を見つけましょう<br>
         登録不要で旅仲間も募集できます
      </p>
    <div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
    　  <label class="input-group-text">国名で絞る</label>
        </div>
      <select name="country"  v-model="searchTerm" class="mb-3">
      <option value="">すべての国</option>
      <option value="Afganistan">Afghanistan</option>
      <option value="Albania">Albania</option>
      <option value="Algeria">Algeria</option>
      <option value="American Samoa">American Samoa</option>
      <option value="Andorra">Andorra</option>
      <option value="Angola">Angola</option>
      <option value="Anguilla">Anguilla</option>
      <option value="Antigua &amp; Barbuda">Antigua &amp; Barbuda</option>
      <option value="Argentina">Argentina</option>
      <option value="Armenia">Armenia</option>
      <option value="Aruba">Aruba</option>
      <option value="Australia">Australia</option>
      <option value="Austria">Austria</option>
      <option value="Azerbaijan">Azerbaijan</option>
      <option value="Bahamas">Bahamas</option>
      <option value="Bahrain">Bahrain</option>
      <option value="Bangladesh">Bangladesh</option>
      <option value="Barbados">Barbados</option>
      <option value="Belarus">Belarus</option>
      <option value="Belgium">Belgium</option>
      <option value="Belize">Belize</option>
      <option value="Benin">Benin</option>
      <option value="Bermuda">Bermuda</option>
      <option value="Bhutan">Bhutan</option>
      <option value="Bolivia">Bolivia</option>
      <option value="Bonaire">Bonaire</option>
      <option value="Bosnia &amp; Herzegovina">Bosnia &amp; Herzegovina</option>
      <option value="Botswana">Botswana</option>
      <option value="Brazil">Brazil</option>
      <option value="British Indian Ocean Ter">British Indian Ocean Ter</option>
      <option value="Brunei">Brunei</option>
      <option value="Bulgaria">Bulgaria</option>
      <option value="Burkina Faso">Burkina Faso</option>
      <option value="Burundi">Burundi</option>
      <option value="Cambodia">Cambodia</option>
      <option value="Cameroon">Cameroon</option>
      <option value="Canada">Canada</option>
      <option value="Canary Islands">Canary Islands</option>
      <option value="Cape Verde">Cape Verde</option>
      <option value="Cayman Islands">Cayman Islands</option>
      <option value="Central African Republic">Central African Republic</option>
      <option value="Chad">Chad</option>
      <option value="Channel Islands">Channel Islands</option>
      <option value="Chile">Chile</option>
      <option value="China">China</option>
      <option value="Christmas Island">Christmas Island</option>
      <option value="Cocos Island">Cocos Island</option>
      <option value="Colombia">Colombia</option>
      <option value="Comoros">Comoros</option>
      <option value="Congo">Congo</option>
      <option value="Cook Islands">Cook Islands</option>
      <option value="Costa Rica">Costa Rica</option>
      <option value="Cote DIvoire">Cote D Ivoire</option>
      <option value="Croatia">Croatia</option>
      <option value="Cuba">Cuba</option>
      <option value="Curaco">Curacao</option>
      <option value="Cyprus">Cyprus</option>
      <option value="Czech Republic">Czech Republic</option>
      <option value="Denmark">Denmark</option>
      <option value="Djibouti">Djibouti</option>
      <option value="Dominica">Dominica</option>
      <option value="Dominican Republic">Dominican Republic</option>
      <option value="East Timor">East Timor</option>
      <option value="Ecuador">Ecuador</option>
      <option value="Egypt">Egypt</option>
      <option value="El Salvador">El Salvador</option>
      <option value="Equatorial Guinea">Equatorial Guinea</option>
      <option value="Eritrea">Eritrea</option>
      <option value="Estonia">Estonia</option>
      <option value="Ethiopia">Ethiopia</option>
      <option value="Falkland Islands">Falkland Islands</option>
      <option value="Faroe Islands">Faroe Islands</option>
      <option value="Fiji">Fiji</option>
      <option value="Finland">Finland</option>
      <option value="France">France</option>
      <option value="French Guiana">French Guiana</option>
      <option value="French Polynesia">French Polynesia</option>
      <option value="French Southern Ter">French Southern Ter</option>
      <option value="Gabon">Gabon</option>
      <option value="Gambia">Gambia</option>
      <option value="Georgia">Georgia</option>
      <option value="Germany">Germany</option>
      <option value="Ghana">Ghana</option>
      <option value="Gibraltar">Gibraltar</option>
      <option value="Great Britain">Great Britain</option>
      <option value="Greece">Greece</option>
      <option value="Greenland">Greenland</option>
      <option value="Grenada">Grenada</option>
      <option value="Guadeloupe">Guadeloupe</option>
      <option value="Guam">Guam</option>
      <option value="Guatemala">Guatemala</option>
      <option value="Guinea">Guinea</option>
      <option value="Guyana">Guyana</option>
      <option value="Haiti">Haiti</option>
      <option value="Hawaii">Hawaii</option>
      <option value="Honduras">Honduras</option>
      <option value="Hong Kong">Hong Kong</option>
      <option value="Hungary">Hungary</option>
      <option value="Iceland">Iceland</option>
      <option value="India">India</option>
      <option value="Indonesia">Indonesia</option>
      <option value="Iran">Iran</option>
      <option value="Iraq">Iraq</option>
      <option value="Ireland">Ireland</option>
      <option value="Isle of Man">Isle of Man</option>
      <option value="Israel">Israel</option>
      <option value="Italy">Italy</option>
      <option value="Jamaica">Jamaica</option>
      <option value="Japan">Japan</option>
      <option value="Jordan">Jordan</option>
      <option value="Kazakhstan">Kazakhstan</option>
      <option value="Kenya">Kenya</option>
      <option value="Kiribati">Kiribati</option>
      <option value="Korea North">Korea North</option>
      <option value="Korea Sout">Korea South</option>
      <option value="Kuwait">Kuwait</option>
      <option value="Kyrgyzstan">Kyrgyzstan</option>
      <option value="Laos">Laos</option>
      <option value="Latvia">Latvia</option>
      <option value="Lebanon">Lebanon</option>
      <option value="Lesotho">Lesotho</option>
      <option value="Liberia">Liberia</option>
      <option value="Libya">Libya</option>
      <option value="Liechtenstein">Liechtenstein</option>
      <option value="Lithuania">Lithuania</option>
      <option value="Luxembourg">Luxembourg</option>
      <option value="Macau">Macau</option>
      <option value="Macedonia">Macedonia</option>
      <option value="Madagascar">Madagascar</option>
      <option value="Malaysia">Malaysia</option>
      <option value="Malawi">Malawi</option>
      <option value="Maldives">Maldives</option>
      <option value="Mali">Mali</option>
      <option value="Malta">Malta</option>
      <option value="Marshall Islands">Marshall Islands</option>
      <option value="Martinique">Martinique</option>
      <option value="Mauritania">Mauritania</option>
      <option value="Mauritius">Mauritius</option>
      <option value="Mayotte">Mayotte</option>
      <option value="Mexico">Mexico</option>
      <option value="Midway Islands">Midway Islands</option>
      <option value="Moldova">Moldova</option>
      <option value="Monaco">Monaco</option>
      <option value="Mongolia">Mongolia</option>
      <option value="Montserrat">Montserrat</option>
      <option value="Morocco">Morocco</option>
      <option value="Mozambique">Mozambique</option>
      <option value="Myanmar">Myanmar</option>
      <option value="Nambia">Nambia</option>
      <option value="Nauru">Nauru</option>
      <option value="Nepal">Nepal</option>
      <option value="Netherland Antilles">Netherland Antilles</option>
      <option value="Netherlands">Netherlands (Holland, Europe)</option>
      <option value="Nevis">Nevis</option>
      <option value="New Caledonia">New Caledonia</option>
      <option value="New Zealand">New Zealand</option>
      <option value="Nicaragua">Nicaragua</option>
      <option value="Niger">Niger</option>
      <option value="Nigeria">Nigeria</option>
      <option value="Niue">Niue</option>
      <option value="Norfolk Island">Norfolk Island</option>
      <option value="Norway">Norway</option>
      <option value="Oman">Oman</option>
      <option value="Pakistan">Pakistan</option>
      <option value="Palau Island">Palau Island</option>
      <option value="Palestine">Palestine</option>
      <option value="Panama">Panama</option>
      <option value="Papua New Guinea">Papua New Guinea</option>
      <option value="Paraguay">Paraguay</option>
      <option value="Peru">Peru</option>
      <option value="Phillipines">Philippines</option>
      <option value="Pitcairn Island">Pitcairn Island</option>
      <option value="Poland">Poland</option>
      <option value="Portugal">Portugal</option>
      <option value="Puerto Rico">Puerto Rico</option>
      <option value="Qatar">Qatar</option>
      <option value="Republic of Montenegro">Republic of Montenegro</option>
      <option value="Republic of Serbia">Republic of Serbia</option>
      <option value="Reunion">Reunion</option>
      <option value="Romania">Romania</option>
      <option value="Russia">Russia</option>
      <option value="Rwanda">Rwanda</option>
      <option value="St Barthelemy">St Barthelemy</option>
      <option value="St Eustatius">St Eustatius</option>
      <option value="St Helena">St Helena</option>
      <option value="St Kitts-Nevis">St Kitts-Nevis</option>
      <option value="St Lucia">St Lucia</option>
      <option value="St Maarten">St Maarten</option>
      <option value="St Pierre &amp; Miquelon">St Pierre &amp; Miquelon</option>
      <option value="St Vincent &amp; Grenadines">St Vincent &amp; Grenadines</option>
      <option value="Saipan">Saipan</option>
      <option value="Samoa">Samoa</option>
      <option value="Samoa American">Samoa American</option>
      <option value="San Marino">San Marino</option>
      <option value="Sao Tome &amp; Principe">Sao Tome &amp; Principe</option>
      <option value="Saudi Arabia">Saudi Arabia</option>
      <option value="Senegal">Senegal</option>
      <option value="Serbia">Serbia</option>
      <option value="Seychelles">Seychelles</option>
      <option value="Sierra Leone">Sierra Leone</option>
      <option value="Singapore">Singapore</option>
      <option value="Slovakia">Slovakia</option>
      <option value="Slovenia">Slovenia</option>
      <option value="Solomon Islands">Solomon Islands</option>
      <option value="Somalia">Somalia</option>
      <option value="South Africa">South Africa</option>
      <option value="Spain">Spain</option>
      <option value="Sri Lanka">Sri Lanka</option>
      <option value="Sudan">Sudan</option>
      <option value="Suriname">Suriname</option>
      <option value="Swaziland">Swaziland</option>
      <option value="Sweden">Sweden</option>
      <option value="Switzerland">Switzerland</option>
      <option value="Syria">Syria</option>
      <option value="Tahiti">Tahiti</option>
      <option value="Taiwan">Taiwan</option>
      <option value="Tajikistan">Tajikistan</option>
      <option value="Tanzania">Tanzania</option>
      <option value="Thailand">Thailand</option>
      <option value="Togo">Togo</option>
      <option value="Tokelau">Tokelau</option>
      <option value="Tonga">Tonga</option>
      <option value="Trinidad &amp; Tobago">Trinidad &amp; Tobago</option>
      <option value="Tunisia">Tunisia</option>
      <option value="Turkey">Turkey</option>
      <option value="Turkmenistan">Turkmenistan</option>
      <option value="Turks &amp; Caicos Is">Turks &amp; Caicos Is</option>
      <option value="Tuvalu">Tuvalu</option>
      <option value="Uganda">Uganda</option>
      <option value="Ukraine">Ukraine</option>
      <option value="United Arab Erimates">United Arab Emirates</option>
      <option value="United Kingdom">United Kingdom</option>
      <option value="United States of America">United States of America</option>
      <option value="Uraguay">Uruguay</option>
      <option value="Uzbekistan">Uzbekistan</option>
      <option value="Vanuatu">Vanuatu</option>
      <option value="Vatican City State">Vatican City State</option>
      <option value="Venezuela">Venezuela</option>
      <option value="Vietnam">Vietnam</option>
      <option value="Virgin Islands (Brit)">Virgin Islands (Brit)</option>
      <option value="Virgin Islands (USA)">Virgin Islands (USA)</option>
      <option value="Wake Island">Wake Island</option>
      <option value="Wallis &amp; Futana Is">Wallis &amp; Futana Is</option>
      <option value="Yemen">Yemen</option>
      <option value="Zaire">Zaire</option>
      <option value="Zambia">Zambia</option>
      <option value="Zimbabwe">Zimbabwe</option>
      </select>
      </div>
      <br>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
           <label class="input-group-text">期間検索<span style="color:#0000FF">(任意)</span></label>
        </div>
      <Datepicker v-model="searchdeparture" placeholder="期間のはじまりを選択"
      :disabledDates="{to: new Date()}" :format="customFormatter" />
      <button type="button" class="btn btn-primary btn-sm" @click="onclickcleardeparture">クリア</button>
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
           <label class="input-group-text">期間検索<span style="color:#0000FF">(任意)</span></label>
        </div>
      <Datepicker v-model="searcharrival" placeholder="期間の終わりを選択"
      :disabledDates="{to: this.searchdeparture}"
      :format="customFormatter" :disabled="this.searchdeparture===''" />
      <button type="button" class="btn btn-secondary btn-sm" @click="onclickcleararrival">クリア</button>
      </div>
    </div>
    </div>
  </div>
  <div>
    <button type='button'  class='btn btn-secondary btn-block' @click="onSwitch"
    v-if='!this.forswitch'>旅仲間を検索する＞＞</button>
    <button type='button' class='btn btn-secondary btn-block' @click="onSwitch"
    v-if='this.forswitch'>旅仲間を募集する＞＞</button>
  </div>
  <register v-if='!this.forswitch'></register>
  <div class="container" id="forpost">
    <h3 >投稿一覧</h3>
    <p id="forpost">検索条件にマッチした投稿が表示されます</p>
  </div>

  <div v-for="post in postingToDisplay" :key="post.key" class="container  mb-3" id="posting" >
    <div class="row">
      <div class="col-sm">
        <img class="rounded" :src="post.pictures[0]" v-if="post.pictures">
        <img class="rounded" :src="url" v-else-if="!post.pictures">
        by {{post.name}}さん({{post.age}}歳 {{post.sexselected}} {{post.occupation}}) <br>at {{post.date}}
      </div>
    </div>

    <div>
        <h3 id="posttitle">{{post.destination}}({{post.departure}}〜{{post.arrival}})</h3>
        <p class="card-text">{{post.intro}}</p>
        <input type='password' maxlength="10" placeholder="削除用パスワード" v-model="secretcodecheck">
        <button type='button' :disabled="!(post.secretcode===secretcodecheck)"
          class='btn btn-secondary' @click="onDelete(post['.key'])">削除</button>
    </div>
</div>
  <footers></footers>
</div>

</template>

<script>
import Headers from '~/components/Header'
import Footers from '~/components/Footer'
import Register from '~/components/register'
import Query from '~/components/Query'
import {mapActions} from 'vuex'
import {mapState} from 'vuex'
import Datepicker from 'vuejs-datepicker'
import moment from 'moment'


export default {
  data(){
    return {
      forswitch : true,
      name: null,
      intro:null,
      pictures:null,
      age:null,
      sexselected:null,
      occupation:null,
      departure:null,
      arrival:null,
      destination:null,
      secretcode:null,
      date:null,
      secretcodecheck:null,
      searchTerm:"",
      searchdeparture:"",
      searcharrival:"",
      url:"http://design-ec.com/d/e_others_50/l_e_others_500.png"
    }
  },
  methods:{
    ...mapActions(['bindFirebaseReferences','deletePost']),
    onSwitch(){
      this.forswitch = !this.forswitch
      this.searchTerm = ""
      this.searchdeparture =""
      this.searcharrival =""
    },
    onDelete(post){
      this.deletePost(post)
    },
    onChosenPosting(post){
      this.name= post.name
      this.intro=post.intro
      this.pictures=post.pictures
      this.age=post.age
      this.sexselected=post.sexselected
      this.occupation=post.occupation
      this.departure=post.departure
      this.arrival=post.arrival
      this.destination=post.destination
      this.secretcode=post.secretcode
      this.date=post.date
    },
    customFormatter(date) {
      return moment(date).format('YYYY年MM月DD日');
    },
    onclickcleararrival() {
      this.searcharrival = ""
    },
    onclickcleardeparture() {
      this.searchdeparture = ""
    },
  },
  components: {
    Headers,
    Footers,
    Register,
    Query,
    Datepicker
  },
  created(){
      this.bindFirebaseReferences()
　},
  computed: {
    ...mapState(['posting']),
    validation : function() {
      return this.searchTerm === ""
    },
    postingToDisplay () {
      return this.posting.filter(posting => {
        let destination1 = posting.destination
        let destination2 = this.searchTerm
        let start = posting.departureyearmonth
        let final = posting.arrivalyearmonth
        let checkdeparturedate = this.searchyearmonthdeparture
        let checkarrivaldate = this.searchyeararrival
        return (destination1 === destination2 || destination2 === "") &&
        (!(checkdeparturedate > final || checkarrivaldate > start) || (this.searchdeparture === ""
        && this.searcharrival === ""))
      })
    },
    searchyearmonthdeparture: function() {
      let year=moment(this.searchdeparture).format('YYYYMMDD')
      return year
    },
    searchyearmontharrival: function() {
      let year=moment(this.searcharrival).format('YYYYMMDD')
      return year
    },
}
}
</script>

<style>
.container#forform{
  text-align: center;
  background-color:#FFFF
}
h3#subtitle{
  color: #000080;
}
h3#posttitle{
  color: #000080;
}
.input-group-prepend{
  text-align: center;
  background-color:#FFFF
}
.container#forpost{
  text-align: center;
  background-color:#FFFF;
color: #000080;
}
.container#posting{
  text-align: left;
  background-color:#FFFF;
  color: #000000;
}
img.rounded {
width: 96px;
height: 65px;
 float: left;
}
p#forpost{
  color: #000000
}

</style>
