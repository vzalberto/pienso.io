---
title: Solicitud POST con datos de formulario en Go 
---


```go
package main

import (
    "log"
    "io/ioutil",
    "net/http",
    "net/url"
)

func main () {

	form := url.Values{}
	form.Add("foo", "bar")

	resp, err := http.PostForm("http://example.com", form)

	if (err != nil) {
		log.Fatalln(err)
	}

	defer resp.Body.Close()

	body, err := ioutil.ReadAll(resp.Body)

	if (err != nil) {
		log.Fatalln(err)
	}

	log.Println(string(body))

}
```