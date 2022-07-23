# linqext
Wrap  linq.js

install
```shell
npm install linqext
```

use
```js
import Linq from "linqext/Linq";

cosnt src=[1,2,3,4,5,6,7,8,9];
let list=Linq.get(src);
let sub=list.where(x=>x>3 && x<=9).orderBy(x=>x).toArray();
```