import { defineStore } from 'pinia';

const useLayout = defineStore('layout',{
  state: () => ({
    showAboutMe: false,
    showAdmin: false,
    showContact: false
  }),
})

export default useLayout;