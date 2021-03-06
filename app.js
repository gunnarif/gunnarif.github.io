var app = new Vue({
    el: '#app',
    data: {
        links: [
            {
                title: "Aðgerðarstjórnstöð Selfossi",
                links: [
                    { text: "Aðgerðargrunnur Landsbjargar", url: "https://adgerd.landsbjorg.is", img: "img/landsbjorg-logo.png" },
                    { text: "Aðgerðargrunnur Almannavarna", url: "https://almannavarnir.sardynamics.com/", img: "img/av_logo__2_.svg" },
                    { text: "Sitewatch", url: "https://www.sitewatch.is", img: "img/samsyn_logo2.png" },
                    { text: "Fjarvinnsla", url: "https://appear.in/blar8", img: "img/apperin.png", desc: "Virkja aðgang með astsudurland@gmail.com" },
                    { text: "Vedurstofan", url: "https://www.vedur.is", img: "https://www.vedur.is/media/vedurtakn/6d7adrut.png" },
                    { text: "Vegagerðin", url: "http://www.vegagerdin.is/", img: "http://www.vegagerdin.is/skin/basic9k/i/sitelogo.png" },
                    { text: "Vefmyndavélar Suðurlandi", url: "http://vefmyndavelar.adgerdastjorn.is/", img: "img/myndavel.png" }
                ]
            }
        ],
        chapters: [
            { 
                title: "Aðgerðarstjórn" ,
                links: [
                    
                    { text: "Aðgerðarstjórn Gátlisti", url: "https://drive.google.com/file/d/0By7nwP0jLhmMOTMwb3hRQmY2cW5POW5rbVRDUlVvdldoSHpr/view?ts=5c642626", img: "" }
                ]	
            },
            { 
                title: "Almannavarnir" ,
                links: [
                    { text: "Hópslysaáætlun fyrir Suðurland", url: "https://www.almannavarnir.is/utgefid-efni/vidbragdsaaetlun-hopslys-sudurland/?wpdmdl=20846", img: "" },
                    { text: "Viðbragðsáætlanir", url: "https://www.almannavarnir.is/utgefid-efni/?wpdmc=vidbragdsaaetlanir-seraaetlanir", img: "" },
                ]	
            },
            { 
                title: "Svæðisstjórn bj.sv 3" ,
                links: [
                    { text: "Boðunarspjöld", url: "https://drive.google.com/drive/u/1/folders/19wV2uux5_RxW0r0bxKeC8e7vGW4sGNYE?ogsrc=32", img: "" },
                    { text: "Leit Fyrstuviðbrögð", url: "", img: "" },
                    { text: "Dýptarkort Ölfusá", url: "https://drive.google.com/file/u/0/d/0B5mnj0ijqOwFekNldGRFM2FmQUE/view?usp=drive_open", img: "" },
                    { text: "Fundarstaðir í Ölfusá", url: "https://drive.google.com/drive/u/1/folders/0B5mnj0ijqOwFQmVrMUs4bDlCWVE?ogsrc=32", img: "" },
                    { text: "Staðsetning Bjarga", url: "https://www.landsbjorg.is/bjorgunarsveitir/adgerdamal/stadsetning-bjarga", img: "" },
                    { text: "Svæðamörk", url: "https://www.landsbjorg.is/assets/bjorgunarsvid%20adgerdarmal/bj%C3%B6rgunarsv%20og%20sv%C3%A6-am%C3%B6rk%202007.pdf", img: "" }
                ]	
            },
            { 
                title: "Brunavarnir Árnessýslu" ,
                links: [
                    { text: "Umsjá", url: "https://www.babubabu.is/umsjon/", img: "" },
                ]	
            },
            { 
                title: "Veður" ,
                links: [
                    { text: "Vatnshæðamælingar", url:"http://vmkerfi.vedur.is/vatn/index.html" },
                    { text: "Veður brunnur", url: "http://brunnur.vedur.is/kort/spakort/" },
                    { text: "Belgingur", url: "http://belgingur.is/map/island-3.2.sudur", img: "" },
                    { text: "Windy", url: "https://www.windy.com/?63.931,-18.572,8", img: "" },
                    { text: "Veðurstöð Reynivöllum", url: "http://www.verksud.is/vedur/reynivellir-nu.cfm" },
                    { text: "Loftgæðamælingar", url: "https://ust.is/einstaklingar/loftgaedi/maelingar/" },
                    { text: "Öskufallspár", url: "https://dispersion.vedur.is/"},
                    { text: "Skjálfta-Lísa", url: "https://skjalftalisa.vedur.is/"},
                ]	
            },
            { 
                title: "Annað gagnlegt" ,
                links: [
                    { text: "Bjargir 112", url:"https://bjargir.112.is/Web/Default.aspx" },
                    { text: "Kortavefur Suðurlands", url: "http://map.is/sass/", img: "" },
                    { text: "Íshellar í Vatnajöklsþjóðgarði", url: "http://jardvis.hi.is/sites/jardvis.hi.is/files/Pdf_skjol/ishellar_ahaetta_rh-05-2017.pdf"},
                    { text: "ADR Handbók - Vinnueftirlitið", url: "https://www.vinnueftirlit.is/media/handbaekur/Handbok_ADR.pdf", img: "" }
                ]	
            },
            { 
                title: "Vefmyndavélar" ,
                links: [
                    { text: "Hekla frá Búrfelli", url: "http://hraun.vedur.is/ja/hekla/cam/burfell-cam.html" },
                    { text: "Kerlingafjöll", url: "http://www.kerlingarfjoll.is/is/vefmyndavelar/" },
                    { text: "Míla", url: "https://www.livefromiceland.is/" },
                    { text: "Hótel Rangá", url: "https://www.hotelranga.is/is/vefmyndavel" },
                    { text: "Árvirkinn myndavél", url: "http://stream.webcams.travel/1232299308" },
                ]	
            }
        ],
        message: 'Hello Vue!'
    }
})
