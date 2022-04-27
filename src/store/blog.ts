import { defineStore } from 'pinia';
import { FIND_BLOG } from "@/http/api";
import request from "@/http";


export interface Blog {
  id: number,
  title: string,
  classify: string,
  imgpath: string,
  blogpath: string,
  createdate: string
}

const allBlog:Blog[] = []
const current:number = 1
const total:number = 100
const title:string = ''
const classify: string = ''

const useBlog = defineStore('blog',{
  state: () => ({
    allBlog,
    current,
    total,
    title,
    classify
  }),
  actions: {
    findBlog(title:string = '', current:number = 1, classify:string = '' ){
      request.get({
        url: FIND_BLOG,
        data:{
          title,
          current,
          classify
        }
      }).then((res:any) => {
        if(res.data.code === 200){
          this.allBlog = res.data.data;
          this.total = res.data.total;
        }
      })
    }
  }
})

export default useBlog;