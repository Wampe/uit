# UIT: User Interface Toolkit

The User Interface Toolkit is a library with components and other resources for Angular applications. 

# Installation

To install the User Interface Toolkit, run:
```
npm install --save git+https://git@github.com/Wampe/uit.git
```

# Consuming the library
Add it for example to your Angular `AppModule`:
```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UitModule } from '@wampe/uit';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UitModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use its components, directives and pipes in your Angular application:

```
<!-- You can now use your library component in app.component.html -->
<h1>
  {{title}}
</h1>
<uit-component></uit-component>
```

# License
MIT © [Wampe](mailto:info@wampe.net)
