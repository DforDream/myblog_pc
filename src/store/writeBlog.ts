import { defineStore } from 'pinia';


export interface BlogState {
  title: string;
  classify: string | null;
  image: any[];
  content: string;
}
const blogState: BlogState = {
  title: "",
  classify: null,
  image: [],
  content: "",
};
const useWriteBlog = defineStore('writeblog',{
  state: () => ({
    blogState
  })
})

export default useWriteBlog;