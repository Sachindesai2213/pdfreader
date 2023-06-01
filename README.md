# PDF Reader

## Requirements - Python 3.9+, Java (for tabula-py), wkhtmltopdf to be installed on Local machine

Download link for wkhtmltopdf - `https://wkhtmltopdf.org/downloads.html` for HTML to PDF conversion with pdfkit python.

## Setup

The first thing to do is to clone the repository in your project folder:

```sh
$ git clone https://github.com/Sachindesai2213/pdfreader.git
$ cd pdfreader
```

Create a virtual environment to install dependencies in and activate it:

Then install the dependencies:

```sh
(env)$ pip install -r requirements.txt
```
Note the `(env)` in front of the prompt. This indicates that this terminal
session operates in a virtual environment set up by `virtualenv`.

Once `pip` has finished downloading the dependencies:
```sh
(env)$ python manage.py runserver
```
And navigate to `http://127.0.0.1:8000`.

`Mechanism:`
1. Upload PDF File in the file field when you need to read data from.
2. The files generated with updates made are saved in media folder.
3. The updated data gets send to the frontend and gets displayed in the DxDatagrid.

![PDF Reader](https://github.com/Sachindesai2213/pdfreader/assets/64885520/624980c8-4516-4043-a38c-88d361a298ed)
