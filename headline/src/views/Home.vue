<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    {{d}}
  </div> -->
  <el-container>
    <el-aside>

    </el-aside>
    <el-container>

    <el-header>

    </el-header>
    <el-main>
      <el-button>啥也没有的按钮</el-button>
				<el-button type="primary">啥也没有的按钮</el-button>
				<el-button type="success">啥也没有的按钮</el-button>
				<el-button type="info">啥也没有的按钮</el-button>
				<el-button type="warning">啥也没有的按钮</el-button>
				<el-button type="danger">啥也没有的按钮</el-button>
        <el-form>
    <el-form-item label="赵啦啦" class="rrrr">
      <el-input></el-input>
    </el-form-item>
        </el-form>
    </el-main>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src


export default {
  data(){
    return{
      d:null
    }
  },
 created(){
   this.$axios.get('/home').then((result)=>{
     console.log(result,"result");
    //  this.d = result.data
   }).catch((e)=>{
     consol.log(e,"ee");
     console.log(e.response);
   })
 }
};
</script>
<style lang="less" scoped>
.el-aside{
  height: 100vh;
  background-color: skyblue;
}
.el-header{
  height: 60px;
  background-color: blue;
}
.el-main{
  height: 300px;
  background-color:red;
}
</style>
<style lang="less">
// .rrrr{

//   label{
//     color: gold; 
// }
//   }
.el-form-item{
label{
  color: blue;
}
}
</style>

