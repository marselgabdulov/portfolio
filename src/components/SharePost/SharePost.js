import React, { useEffect } from "react"
import "./SharePost.scss"
import Telegram from "../../assets/telegram.svg"
import Twitter from "../../assets/twitter.svg"
import Facebook from "../../assets/facebook.svg"
import VK from "../../assets/vk.svg"
import Whatsapp from "../../assets/whatsapp.svg"

import {
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  VKShareButton,
  WhatsappShareButton,
} from "react-share"

function SharePost({ postLink }) {
  useEffect(() => {
    console.log(postLink)
  }, [])
  return (
    <div className="share-post">
      <FacebookShareButton url={`https://marsdev.ru/${postLink}`}>
        <Facebook />
      </FacebookShareButton>
      <TwitterShareButton url={`https://marsdev.ru/${postLink}`}>
        <Twitter />
      </TwitterShareButton>
      <VKShareButton url={`https://marsdev.ru/${postLink}`}>
        <VK />
      </VKShareButton>
      <WhatsappShareButton url={`https://marsdev.ru/${postLink}`}>
        <Whatsapp />
      </WhatsappShareButton>
      <TelegramShareButton url={`https://marsdev.ru/${postLink}`}>
        <Telegram />
      </TelegramShareButton>
    </div>
  )
}

export default SharePost
