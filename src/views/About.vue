<template>
<div class="container">
      <div id="taskApp" class="col-sm-8 col-sm-offset-2">
        <h1 class="bg-primary text-white  text-center p-2">Tienda 1</h1>

        <!-- form -->
        <div class="panel panel-default">
          <h2 class="text-center">Agregar un producto</h2>
          <form v-on:submit="agregarp" class="app-form">
              <input type="text"  v-model="productos.nombre" class="form-control">
              <input type="submit" value="Agregar" class="btn btn-block btn-success">
          </form>
        </div>

        <!-- table -->
        <table class="table">
          <thead>
            <tr>
              <th>Seleccionar</th>
              <th>Producto</th>
              <th>Eliminar</th>
            </tr>
            
          </thead>
          <tbody> 
          <!--div v-for="(task, index) in tasks" :key="index"-->
           <tr  v-for="(producto, index) in productos" :key="index">
              <td>
                <input type="checkbox" v-model="producto.ag">
              </td>
              <td>
                <span :class="{taskDone:producto.ag}">
                  {{ producto.nombre }}
                </span>
              </td>
              <td>
                <button
                  v-on:click="eliminarp(producto)"
                  class="btn btn-block btn-danger">
                  Delete
                </button>
              </td>
            </tr>
   
 <!--/div-->
          
             

      
            
          </tbody>
        </table>
        
      </div>
    </div>

      
</template>

<script>
export default{
  data(){
    return{
      productos:[
         {nombre: 'Arroz',ag: true},
         {nombre: 'Frijoles',ag: false},
         {nombre: 'Condimentos',ag: false},
     

       
      ]
    }
  },

  methods: {
          agregarp: function (e) {
            e.preventDefault();
            this.productos.push({
              nombre: this.productos.nombre,
              ag: false
            });
          this.productos.nombre = '';
          }, 
          eliminarp: function (producto) {
            this.productos.splice(
              this.productos.indexOf(producto),
              1
            )
          }
        }
};
 
    

</script>



 

   

    
