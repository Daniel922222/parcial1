<template>
  <div>
  <div class="container-fluid p-d4">
  <div class="row">
   <div class="col font-weight-bold" >producto</div>
   <div class="col-2 font-weight-bold" >Agotado</div>
  
  </div>
  <div class="row" v-for="t in filtroProductos" v-bind:key="t.descripcio">
  <div class="col">{{t.descripcio}}</div>
  <div class="col-2  txt-center">
  <input type="checkbox" v-model="t.agotado" class="form-check-input"/>
  {{t.agotado}}
  </div>
  </div>
  </div>
  <div class="row py-2">
  <div class="col">
<input class="from-control" v-model="nuevo">      
  </div>
  <div class="cool-2">
  <button class="btn btn-primary" v-on:click="agregar">Agregar</button>

  
  </div>
  </div>
   <div class="row bg-dark py-2 mt-2 text-white">
   <div class="col text-center">
   <input type="checkbox" class="from-check-input" v-model=" vendidos"> 
   <label class="from-check-label font-wight-bold">
    ocultar productos vendidos
   </label>
   </div>
   </div>
  </div>      
  
</template>
<script>
export default{
  data(){
    return{
      producto:[
        {descripcio:"Pollo",agotado:false},
        {descripcio:"Salsa",agotado:false}
      ],
      vendidos:true,
      nuevo:""
    }
  },
  computed:{
    filtroProductos(){
      return this.vendidos? this.producto.filter(t=> !t.agotado):this.producto

    }
  },
  methods:{
    agregar(){
      this.producto.push(
        {
          descripcio:this.nuevo,
          agotado:false
        }
      );
      this.nuevo="";
    }
  }
};


</script>
