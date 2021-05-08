/* plusapi v1.0.5 | (c) 2021 by ofarukbicer */

class PlusAPI {

  /**
   * 
   * PlusAPI | Piyasa Verileri Sınıfı
   *   
   * Gereksinimler
   * -------------
   *  $token = XXXX
   *  
   * Methodlar
   * ---------
   *  hisse_ver(sembol) -> İstenilen Sembolün Bilgilerini Çevirir
   * 
   *  hisse_sepet() -> BIST Top-10 Çevirir
   * 
   *  kripto_ver(sembol) -> İstenilen Sembolün Bilgilerini Çevirir
   * 
   *  kripto_haber() -> Kriptolar Hakkında Güncel Haberleri Çevirir
   * 
   *  kripto_sepet() -> Kripto Top-10 Çevirir
   * 
   *  bilgi -> "PlusAPI | Piyasa Verileri Sınıfı"
   * 
   *  token -> Girdiğiniz tokeni geriye dönderir
   * 
   * @param {*} token Bizim tarafızdan size verilen token
   */
  constructor(token) {
    this.token = token;
    this.bilgi = "PlusAPI | Piyasa Verileri Sınıfı";
  }

  /**
   * 
   * PlusAPI'nin API hizmetine istek atar
   * 
   * @param {*} endpoint İstek atmak istediğiniz endpoint
   * @param {*} sembol Eğer istek atmak istediğiniz endpoint sembol isterse doldurulması gerekir
   * @returns 
   */
  async istek_at(endpoint, sembol = null) {
    await axios({
      method: 'get',
      url: "https://plusapi.org/api" + endpoint + "?token=" + this.token + (sembol != null ? "&sembol=" + encodeURIComponent(sembol) : ""),
      responseType: 'json'
    }).then(async (response) => {
      global.data = await response.data;
    })
    return global.data;
  }

  /**
   * 
   * İstenilen Sembolün Bilgilerini Çevirir
   * 
   * @param {*} sembol 
   * @returns 
   */
  async hisse_ver(sembol = "") {
    await this.istek_at("/hisse", sembol).then(async (data) => {
      global.data = await data;
    })
    return global.data;
  }

  /**
   * 
   * BIST Top-10 Çevirir
   * 
   * @returns 
   */
  async hisse_sepet() {
    await this.istek_at("/hisse/sepet").then(async (data) => {
      global.data = await data;
    })
    return global.data;
  }

  /**
   * 
   * İstenilen Sembolün Bilgilerini Çevirir
   * 
   * @param {*} sembol 
   * @returns 
   */
  async kripto_ver(sembol = "") {
    await this.istek_at("/kripto", sembol).then(async (data) => {
      global.data = await data;
    })
    return global.data;
  }

  /**
   * 
   * Kriptolar Hakkında Güncel Haberleri Çevirir
   * 
   * @returns
   */
  async kripto_haber() {
    await this.istek_at("/kripto/haber").then(async (data) => {
      global.data = await data;
    })
    return global.data;
  }

  /**
   * 
   * Kripto Top-10 Çevirir
   * 
   * @returns
   */
  async kripto_sepet() {
    await this.istek_at("/kripto/sepet").then(async (data) => {
      global.data = await data;
    })
    return global.data;
  }
}

module.exports = PlusAPI
