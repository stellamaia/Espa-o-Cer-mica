<template>
  <div class="about">
<b-row>
          <b-col cols="12" sm="12" md="12" lg="12" xl="12">
    <div style="height: 270px; width: 100%,">
      <l-map :zoom="zoom" :center="center" style="height: 100%">
        <l-tile-layer :url="url" :attribution="attribution" />
        <l-marker  :lat-lng="withPopup" >
        <l-popup>
          <div class="pop" >
            Espaço Cerâmica
            
          </div>
        </l-popup>
        </l-marker>
      </l-map>
    </div>
    </b-col>
  </b-row>
  </div>
</template> 

<script>
import { latLng, Icon } from "leaflet";
import { LMap, LTileLayer, LMarker,LPopup  } from "vue2-leaflet";

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});
export default {
  name: "GoogleMap",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    
  },
  data() {
    return {
      zoom: 14,
      
      center: latLng(-18.931161, -48.288986),
      url: 'https://tile.thunderforest.com/atlas/{z}/{x}/{y}.png?apikey=1821088f60a947408a2b766b75db695f',
      attribution: "Mapa",
      withPopup: latLng(-18.931161, -48.288986),
      currentZoom: 10,
      currentCenter: latLng(-18.931161, -48.288986),
      showParagraph: false,
    };
  },
};
</script>
<style scoped>
.about{
  padding-bottom:30px ;

}
.pop{
 font-weight: bold;
}

</style>
