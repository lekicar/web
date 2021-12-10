import { isIos } from '@/utils/equipmentVerify'
export const toDownloadLink = () => {
  if (isIos()) {
    window.location.href = 'https://itunes.apple.com/cn/app/id1570793242?mt=8'
  } else {
    window.location.href =
      'https://download.bq04.com/apps/60dac7eb0d81cc2e21ab3df0/install?download_token=39b644477d32a9d8de357b761fb3bd16&source=update'
  }
}
