<template>
<div>
  <div class='container columun justify-content-center'>
    <h4 class="alert alert-info">旅を登録</h4>
    <div class="form-row">
    　　<div class="col-md-4 mb-3">
    　　　　<input class="form-control" maxlength='20'
    　　　　v-model='registerName' type='text'
    　　　　placeholder='ニックネーム'>
          <input class="form-control" maxlength='20'
    　　　　v-model='age' type='text'
    　　　　placeholder='年齢'>
          <input class="form-control" maxlength='20'
    　　　　v-model='sex' type='text'
    　　　　placeholder='性別'>
    　　　　<input class="form-control" maxlength='20'
　　　　　　　v-model='occupation' type='text'
　　　　　　　placeholder='職業'>
    　　</div>
       <div class="col-md-2 mb-3">
         <label for="exampleFormControlSelect1">行き先</label>
       </div>
       <div class="col-md-6 mb-3">
         <select class="form-control" id="exampleFormControlSelect1">
           <option>インド</option>
           <option>イギリス</option>
           <option>アイルランド</option>
           <option>アメリカ</option>
           <option>中国</option>
          </select>
          <input class="form-control" maxlength='20'
      　　　　　　　v-model='departure' type='text'
      　　　　　　　placeholder='出発予定'>
      　　　<input class="form-control" maxlength='20'
  　　　　　　　v-model='returning' type='text'
  　　　　　　　placeholder='帰国予定'>
        </div>
        <div class="col-md-12 mb-3">
          <textarea class='form-control'
           placeholder='自己紹介と旅の詳細' v-model='selfIntroduction' rows="4"></textarea>
       </div>
       <div class="col-md-12 mb-3">
         <div class="custom-file">
           <input @change="filesChange($event.target.files)"
           type="file"  class="custom-file-input" id="customFile">
           <label class="custom-file-label" for="customFile"
           id="customFile">サムネイル画像を選択</label>
         </div>
       </div>
       <div class="col-md-12 mb-3">
         <div class="form-group">
           <label for="exampleFormControlSelect1">行き先</label>
           <select class="form-control" id="exampleFormControlSelect1">
             <option>インド</option>
             <option>イギリス</option>
             <option>アイルランド</option>
             <option>アメリカ</option>
             <option>中国</option>
            </select>
         </div>
        </div>
        <div class="col-md-12 mb-3">
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
        </div>
        <div class="col-md-12 mb-3">
          <button type="button" class="btn btn-primary" @click="onRegisterClick">投稿</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  data(){
    return {
      registerName : '',
      selfIntroduction: '',
      pictures: []
    }
  },
  methods: {
    ...mapActions(['registerPost','uploadImages']),
    filesChange (files) {
      this.pictures = [...files]
    },
    onRegisterClick (ev) {
      ev.preventDefault()
      ev.stopPropagation()
      this.uploadImages(this.pictures).then(picUrls =>this.registerPost({
        name: this.registerName,
        intro: this.selfIntroduction,
        pictures: picUrls
      }))
    }
  }
}
</script>

<style>

</style>
