<template>
  <Page class="page" xmlns="http://schemas.nativescript.org/tns.xsd">
    <ActionBar title="Home" class="action-bar">
      <ActionItem text="Dawing Pad" ios.position="right" @tap="$navigateTo(drawing)" />
    </ActionBar>
    <ScrollView>
      <StackLayout class="home-panel" paddingTop="30">
        <TextField v-model="textFieldValue" :style="{color: textColor}" hint="Tap to Change the Color" />
        <Button text="Change Color" @tap="onColorButton" />
        <!--Add your page content here-->
        <Label textWrap="true" :text="'Red: ' + red" class="h2 description-label" />
        <Label textWrap="true" :text="'Green: ' + green" class="h2 description-label" />
        <Label textWrap="true" :text="'Blue: ' + blue" class="h2 description-label" />
        <Label textWrap="true" :text="'Hex: ' + textColor" class="h2 description-label" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
    import DrawingScreen from './DrawingScreen';
    export default {
        computed: {
            textColor: function() {
                return "#" +
                    this.red.toString(16).padStart(2, '0') +
                    this.green.toString(16).padStart(2, '0') +
                    this.blue.toString(16).padStart(2, '0');
            }
        },
        methods: {
            onButtonTap() {
                console.log("Button was pressed");
            },
            getRandomInt(max) {
                return Math.floor(Math.random() * Math.floor(max));
            },
            onColorButton() {
                this.red = this.getRandomInt(255);
                this.blue = this.getRandomInt(255);
                this.green = this.getRandomInt(255);
            }
        },

        data() {
            return {
                textFieldValue: "",
                red: 0,
                blue: 0,
                green: 0,
                drawing: DrawingScreen
            };
        }
    };
</script>


<style scoped>
</style>
