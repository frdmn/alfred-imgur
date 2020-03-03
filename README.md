# alfred-imgur

Alfred workflow to upload image files from your Finder to [Imgur](https://imgur.com).

## Installation

1. Make sure you've met all requirements
2. Install the workflow with `npm`:

    ```shell
    npm install -g alfred-imgur
    ```

3. Copy and adjust the default configuration file and make sure your API key is set:

    ```shell
    cp ~/Library/Application\ Support/Alfred\ 3/Alfred.alfredpreferences/workflows/alfred-ldap/.alfred-imgur.conf ~/.alfred-imgur.conf
    vi ~/.alfred-ldap.conf
    ```

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

* Node / NPM
* Imgur [API keys](http://api.imgur.com/oauth2/addclient)

## Version

1.2.1

## License

[MIT](LICENSE)
