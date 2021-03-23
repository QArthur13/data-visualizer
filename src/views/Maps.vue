<template>
    <GMapMap
        :center="center"
        :zoom=2
        map-type-id="terrain"
        style="width: 1500px; height: 700px"
    >
     <GMapCluster>
         <GMapMarker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            :clickable="true"
            :draggable="true"
            v-on:click="center=m.position"
         />
     </GMapCluster>

    </GMapMap>
</template>

<script>
export default {
    
    name: 'Maps',
    data() {

        return {

            center: {lng: 4.976153, lat: 43.509050},
            markers: [
                {
                    position: {
                        
                        lng: 4.976153, lat: 43.509050
                    }
                
                },
                {
                    position: {

                        lng: 20.506072, lat: 49.7722369
                    }
                },
                {
                    position: {

                        lng: 116.359692, lat: 30.849762
                    }
                },
                {
                    position: {

                        lng: 48.4211315	, lat: 53.1121503
                    }
                },
                {
                    position: {

                        lng: -72.667999, lat: -12.94844
                    }
                },
                {
                    position: {

                        lng: 26.3003025, lat: 48.2113225
                    }
                },
                {
                    position: {

                        lng: 14.731627	, lat: 56.010958
                    }
                },
                {
                    position: {

                        lng: 18.8664712	, lat: 54.2490828
                    }
                },
                {
                    position: {

                        lng: 48.2090292	, lat: 52.4801084
                    }
                },
                {
                    position: {

                        lng: 112.29102	, lat: 24.497798
                    }
                },
                {
                    position: {

                        lng: 18.6840269	, lat: 50.8839386
                    }
                },
                {
                    position: {

                        lng: 113.217268	, lat: 22.149009
                    }
                },
                {
                    position: {

                        lng: -72.2704277, lat: -15.6835726
                    }
                },
                {
                    position: {

                        lng: 30.69768, lat: 30.75782
                    }
                },
                {
                    position: {

                        lng: 117.365052	, lat: 25.941937
                    }
                },
                {
                    position: {

                        lng: 15.0839052, lat: 50.578132
                    }
                },
                {
                    position: {

                        lng: 116.683752, lat: 39.538047
                    }
                },
                {
                    position: {

                        lng: 119.89694, lat: 5.07028
                    }
                },
                {
                    position: {

                        lng: 26.3110469, lat: 56.9651439	
                    }
                },
                {
                    position: {

                        lng: 36.4851204	, lat: 35.3837308
                    }
                },
                {
                    position: {

                        lng: -38.7158702, lat: -12.417342
                    }
                },
                {
                    position: {

                        lng: -74.466667	, lat: -12.883333
                    }
                },
                {
                    position: {

                        lng: 122.5100535, lat: 10.9455193
                    }
                },
                {
                    position: {

                        lng: -76.3897733, lat: 17.8886522
                    }
                },
                {
                    position: {

                        lng: 112.2443628, lat: -6.9654201
                    }
                },
                {
                    position: {

                        lng: -75.811744, lat: 6.67745
                    }
                },
                {
                    position: {

                        lng: 25.0380728, lat: 57.2363399
                    }
                },
                {
                    position: {

                        lng: 7.5123813, lat: 51.5195303
                    }
                },
                {
                    position: {

                        lng: 43.6387314, lat: 43.8427177
                    }
                },
                {
                    position: {

                        lng: -67.5827744, lat: 5.6614718
                    }
                },
                {
                    position: {

                        lng: 122.4438929, lat: -8.463483
                    }
                },
                {
                    position: {

                        lng: 11.8627984	, lat: -4.76732
                    }
                },
                {
                    position: {

                        lng: -77.1053673, lat: -12.0582305
                    }
                },
                {
                    position: {

                        lng: -94.7195096, lat: 39.3035567
                    }
                },
                {
                    position: {

                        lng: 113.921327, lat: -0.789275
                    }
                },
                {
                    position: {

                        lng: 124.572975, lat: 11.228282
                    }
                },
                {
                    position: {

                        lng: 100.8282161, lat: 13.6132538
                    }
                },
                {
                    position: {

                        lng: 16.3041503, lat: 57.9936068
                    }
                },
                {
                    position: {

                        lng: 44.7710122, lat: 42.1102695
                    }
                },
                {
                    position: {

                        lng: 104.195397, lat: 35.86166
                    }
                },
                {
                    position: {

                        lng: -93.6001191, lat: 17.9719887
                    }
                },
                {
                    position: {

                        lng: -94.4079213, lat: 38.8525512
                    }
                },
                {
                    position: {

                        lng: -118.24, lat: 34.06
                    }
                },
                {
                    position: {

                        lng: -93.1616515, lat: 18.0711639
                    }
                },
                {
                    position: {

                        lng: 22.2669813, lat: 62.1588835
                    }
                },
                {
                    position: {

                        lng: -54.8438521, lat: -18.9253941
                    }
                },
                {
                    position: {

                        lng: 30.8396598, lat: 27.7327603
                    }
                },
                {
                    position: {

                        lng: 7.0125073, lat: 43.6167837
                    }
                },
                {
                    position: {

                        lng: 23.4915345, lat: 54.7528249
                    }
                },
                {
                    position: {

                        lng: -60.9656452, lat: -16.3800324
                    }
                },
                {
                    position: {

                        lng: 15.8079723, lat: 51.9466854
                    }
                },
                {
                    position: {

                        lng: -70.9853968, lat: -33.6815281
                    }
                },
                {
                    position: {

                        lng: 34.0474348, lat: 35.0011797
                    }
                },
                {
                    position: {

                        lng: 134.1164564, lat: 34.7105088
                    }
                },
                {
                    position: {

                        lng: 42.3111341, lat: 41.6460816
                    }
                },
                {
                    position: {

                        lng: 120.5307881, lat: 0.7821696
                    }
                },
                {
                    position: {

                        lng: 37.2383506, lat: 34.2307023
                    }
                },
                {
                    position: {

                        lng: -54.0793451, lat: 5.5050681
                    }
                },
                {
                    position: {

                        lng: 113.6680747, lat: -8.1844859
                    }
                },
                {
                    position: {

                        lng: 13.3486213, lat: 38.1278654
                    }
                },
                {
                    position: {

                        lng: 12.7842341, lat: 50.2709275
                    }
                },
                {
                    position: {

                        lng: 116.83333, lat: 48.66667
                    }
                },
                {
                    position: {

                        lng: 22.051777, lat: 51.4090959
                    }
                },
                {
                    position: {

                        lng: 113.956275, lat: 25.704535
                    }
                },
                {
                    position: {

                        lng: 18.6254711, lat: 51.3367814
                    }
                },
                {
                    position: {

                        lng: 123.2854675, lat: -8.371718
                    }
                },
                {
                    position: {

                        lng: -0.1365486, lat: 51.5136143
                    }
                },
                {
                    position: {

                        lng: 29.9846651, lat: 60.053638
                    }
                },
                {
                    position: {

                        lng: 116.2601315, lat: -8.8229999
                    }
                },
                {
                    position: {

                        lng: 110.770017, lat: 30.745232
                    }
                },
                {
                    position: {

                        lng: 22.8003951, lat: 37.7937857
                    }
                },
                {
                    position: {

                        lng: -1.585418, lat: 52.177639
                    }
                },
                {
                    position: {

                        lng: 100.4444367, lat: 7.4561372
                    }
                },
                {
                    position: {

                        lng: -71.301904, lat: -42.906336
                    }
                },
                {
                    position: {

                        lng: 101.507294, lat: 25.704535
                    }
                },
                {
                    position: {

                        lng: 104.669996, lat: 16.0445969
                    }
                },
                {
                    position: {

                        lng: -37.9466737, lat: -5.98978
                    }
                },
                {
                    position: {

                        lng: 117.580995, lat: 39.263105
                    }
                },
                {
                    position: {

                        lng: 110.88907, lat: 37.429832
                    }
                },
                {
                    position: {

                        lng: 128.63083, lat: 36.82167
                    }
                },
                {
                    position: {

                        lng: -8.9821467, lat: 52.8498651
                    }
                },
                {
                    position: {

                        lng: 82.6436105, lat: 55.0868852
                    }
                },
                {
                    position: {

                        lng: -97.8755614, lat: 22.2479136
                    }
                },
                {
                    position: {

                        lng: 115.003687, lat: 22.825834
                    }
                },
                {
                    position: {

                        lng: 110.1209019, lat: -7.3677628
                    }
                },
                {
                    position: {

                        lng: -84.0322316, lat: 9.9748039
                    }
                },
                {
                    position: {

                        lng: 27.1147095, lat: -22.5514872
                    }
                },
                {
                    position: {

                        lng: 114.309091, lat: 30.600064	
                    }
                },
                {
                    position: {

                        lng: 117.890354, lat: 31.624522
                    }
                },
                {
                    position: {

                        lng: 14.3504236, lat: 45.3715797
                    }
                },
                {
                    position: {

                        lng: 108.133333, lat: -7.633333
                    }
                },
                {
                    position: {

                        lng: 28.0976369, lat: -26.892953
                    }
                },
                {
                    position: {

                        lng: -77.92, lat: 34.14
                    }
                },
                {
                    position: {

                        lng: 74.1188104, lat: 32.1561962
                    }
                },
                {
                    position: {

                        lng: 120.8129183, lat: 15.1503549
                    }
                },
                {
                    position: {

                        lng: -0.3696612, lat: 43.2916776
                    }
                },
                {
                    position: {

                        lng: 115.038835, lat: 30.20003
                    }
                },
                {
                    position: {

                        lng: 120.9849216, lat: 14.689167
                    }
                },
                {
                    position: {

                        lng: 5.8978018, lat: 43.4945737
                    }
                },
                {
                    position: {

                        lng: 100.595029, lat: 7.2077348
                    }
                },
            ]
        }
    }
}
</script>