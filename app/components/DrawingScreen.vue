<template>
  <Page class="page">
    <ActionBar title="Drawing Pad" class="action-bar">
      <ActionItem ios.systemIcon="16" @tap="clearMyDrawing" ios.position="right" />
      <ActionItem ios.systemIcon="3" @tap="saveDrawing" ios.position="right" />
    </ActionBar>
    <StackLayout class="home-panel">
      <label text="Draw Here"/>
      <DrawingPad
              height="60%"
              class="bordered"
              ref="drawingPad"
              :penColor="selectedColor" penWidth="1" />
      <Button text="Show Color Picker" @tap="showPicker" />
      <StackLayout orientation="horizontal">
        <Label text="Selected Color: " class="message" textWrap="true" />
        <Label :text="selectedColor" class="message" textWrap="true"/>
      </StackLayout>
    </StackLayout>
  </Page>
</template>

<script>
    const ColorPicker = require('nativescript-color-picker').ColorPicker;
    const imageSourceModule = require("tns-core-modules/image-source");
    const fileSystemModule = require("tns-core-modules/file-system");
    const SocialShare = require("nativescript-social-share");


    export default {
        name: "DrawingScreen",
        data() {
            return {
                selectedColor: "#000000",
                cpicker: new ColorPicker
            };
        },
        methods: {
            colorTranslate(colors) {
                return "#" +
                    parseInt(colors[0]).toString(16).padStart(2, '0') +
                    parseInt(colors[1]).toString(16).padStart(2, '0') +
                    parseInt(colors[2]).toString(16).padStart(2, '0');
            },
            showPicker() {
              let vm = this;
              vm.cpicker.show(vm.selectedColor, 'RGB').then(function (result) {
                  vm.selectedColor = vm.colorTranslate(result.split(', '));
              }).catch(function (err) {
                  console.log(err);
              });
            },
            saveDrawing() {
                var pad = this.$refs.drawingPad.nativeView;
                pad.getDrawing().then((a) => {
                    var image = imageSourceModule.fromNativeSource(a);
                    const folderDest = fileSystemModule.knownFolders.documents();
                    const pathDest = fileSystemModule.path.join(folderDest.path, "save.png");
                    const saved = image.saveToFile(pathDest, "png");
                    if (saved) {
                        console.log("Image saved successfully!");
                    }
                    SocialShare.shareImage(image);

                }).catch(function (err) {
                    console.log(err);
                });
            },
            clearMyDrawing(args) {
                var pad = this.$refs.drawingPad.nativeView;
                pad.clearDrawing();
            }
        }
    }
</script>

<style scoped>
  .bordered {
    border-color: black;
    border-width: 2;
  }

</style>