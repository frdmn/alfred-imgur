# alfred-imgur

Alfred workflow to upload image files from Finder or a Screen Capture to [Imgur](https://imgur.com).

## Installation

* Make sure you've installed all requirements
* [Click here to download the latest release](http://www.packal.org/workflow/imgur-uploader)
* [Create API keys on Imgur](https://api.imgur.com/oauth2/addclient)
  * Set *Authorization type* to `Anonymous usage without user authorization`
* Add your client ID in `~/.alfred-imgur.conf`:  
  `echo "{{KEY}}" > ~/.alfred-imgur.conf`

## Usage

Both Finder and Screen Capture methods allow you to do define your own _Hotkey_ for executing thet workflow.

i.e. <kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>⌥</kbd> + <kbd>I</kbd>

### Finder

* Select an image file in your Finder
* Upload using the `imgur finder` Alfred keyword

### Screen Capture

* Start screen capture using the `imgur screenshot` Alfred keyword

## Contributing

1. Fork it
2. Create your feature branch: `git checkout -b feature/my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/my-new-feature`
5. Submit a pull request

## Requirements / Dependencies

* [JSON Helper](https://apps.apple.com/app/json-helper-for-applescript/id453114608)

## Version

2.0.0

## License

[MIT](LICENSE)
