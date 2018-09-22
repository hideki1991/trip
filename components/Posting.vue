<template>
<div class="modal fade" id="postingModal" tabindex="-1"
role="dialog" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered"  role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">{{ name }}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="text-center">
          <img :src="pictures && pictures.length && pictures[0]" class="img-fluid" :alt="name">
        </div>
        <p>{{ intro }}</p>
      </div>
      <div class="modal-footer">
        <p>Created on {{ destination }} by {{ name }}</p>
      </div>
    </div>
  </div>
</div>


</template>
<script>

export default {
  props: ['name', 'destination', 'pictures','intro']
}
</script>
