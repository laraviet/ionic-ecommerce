// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/

import { Pipe, PipeTransform } from '@angular/core';
import { ConfigProvider } from '../../providers/config/config';


@Pipe({
  name: 'curency',
})
export class CurencyPipe implements PipeTransform {

  constructor(public c: ConfigProvider) {
  }

  transform(value) {

    var v = parseFloat(value).toFixed(0).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,");
    console.log(v);
    if (v.toString() == 'NaN') {

      if (this.c.currencyPos == 'left')
        return this.c.currency + " " + value;
      else
        return value + " " + this.c.currency;
    }
    else {
      if (this.c.currencyPos == 'left')
        return this.c.currency + " " + parseFloat(value).toFixed(0).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,");
      else
        return parseFloat(value).toFixed(0).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,") + " " + this.c.currency;
    }
  }
}
