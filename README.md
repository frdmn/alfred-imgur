# alfred-imgur

Alfred workflow to upload image files from your Finder to [Imgur](https://imgur.com).

## Installation

1. Make sure you've installed all requirements
2. Download the latest release:  
  <http://www.packal.org/workflow/imgur-uploader>
3. [Create API keys on Imgur](http://api.imgur.com/oauth2/addclient)
 1. Set *Authorization type* to `Anonymous usage without user authorization`
 2. Set *Authorization callback URL* to any valid URL you want (because we don't need that callback but Imgur wants you to set one), for example: `https://imgur.com`
4. Add your client ID in `~/.alfred-imgur.conf`:  
  `echo "{{KEY}}" > ~/.alfred-imgur.conf`

## Usage

* Select a image file in your Finder
* Upload using
 * the shortcut <kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>⌥</kbd> + <kbd>I</kbd>
 * the `imgur` Alfred keyword

## Contributing

1. Fork it
2. Create your feature branch: `git checkout -b feature/my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/my-new-feature`
5. Submit a pull request

## Requirements / Dependencies

* [JSON Helper](http://www.appstore.com/mac/jsonhelperforapplescript)

## Version

1.1.0

## License

[MIT](LICENSE)

