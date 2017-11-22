[<img src="icon.svg" width="9%" align="right">][circleci]

_[Franz] [recipe]_ for [CircleCI]
=================================
Requires [Franz] version `5.X`.

[Install]
---------
1. Clone this repository to the `Franz/recipes` folder:
~~~ sh
mkdir -p "$HOME/Library/Application Support/Franz/recipes/dev" &&
git clone https://github.com/danielbayley/franz-recipe-circleci "$_/circleci"
~~~
**NOTE** that this will be in a different location on other platforms; `%appdata%/Franz/recipes/dev` on Windows, and `~/.config/Franz/recipes/dev` on Linux.

2. Reload Franz

License
-------
[MIT] © [Daniel Bayley]

[MIT]:              LICENSE.md
[Daniel Bayley]:    https://github.com/danielbayley

[franz]:            https://meetfranz.com
[recipe]:           https://github.com/meetfranz/plugins#readme
[install]:          https://github.com/meetfranz/plugins/blob/master/docs/integration.md#installation

[circleci]:         https://circleci.com
