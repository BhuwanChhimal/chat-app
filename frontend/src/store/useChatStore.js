import {create} from "zustand"
import toast from "react-hot-toast"
import {axiosInstance} from "../lib/axios"    
import { use } from "react"
import { useAuthStore } from "./useAuthStore"

export const useChatStore = create((set,get) => ({
    messages:[],
    users:[],
    selectedUser:null,
    isUsersLoading:false,
    isMessagesLoading:false,


    getUsers: async () => {
        set({isUserLoading:true})
        try {
            const res = await axiosInstance.get("/messages/users")
            set({users:res.data})
        } catch (error) {
            toast.error("Failed to fetch users",error)
        }
        set({isUserLoading:false})
    },

    getMessages: async (userId) => {
        set({isMessagesLoading:true})
        try {
            const res = await axiosInstance.get(`/messages/${userId}`)
            set({messages: res.data})
        } catch (error) {
            toast.error("Failed to fetch messages",error)
        }
        set({isMessagesLoading:false})
    },
    sendMessage: async (messageData) => {
        const { selectedUser, messages } = get();
        try {
          const res = await axiosInstance.post(`/messages/send/${selectedUser._id}`, messageData);
          set({ messages: [...messages, res.data] });
        } catch (error) {
          toast.error(error.response.data.message);
        }
    },

    subscribeToMessages: () => {
        const {selectedUser}= get()
        if(!selectedUser) return;

        const socket = useAuthStore.getState().socket

        
        socket.on("new_message", (newMessage) => {
            const isMessageSentFromSelectedUser = newMessage.senderId === selectedUser._id
            if(!isMessageSentFromSelectedUser) return;

            set({
                messages: [...get().messages, newMessage],
            })
        })

    },

    unSubscribeFromMessages: () => {
        const socket = useAuthStore.getState().socket
        socket.off("new_message")
    },
  
    setSelectedUser: (selectedUser) => {
        set({selectedUser})
    },

}))