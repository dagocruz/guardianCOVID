import { Component, OnInit } from '@angular/core';
import { BarcodeScanner,BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { scan } from 'rxjs/operators';

@Component({
  selector: 'app-escaner-qr',
  templateUrl: './escaner-qr.page.html',
  styleUrls: ['./escaner-qr.page.scss'],
})
export class EscanerQrPage implements OnInit {

  data:any;
  options:BarcodeScannerOptions;
  constructor(
    private barcodeScanner:BarcodeScanner
  ) { }

  ngOnInit() {
  }

  scan() {

    this.data = null;
    this.options = {
      prompt : "Coloca el código QR dentro del área.",
      resultDisplayDuration: 0
    }
    this.barcodeScanner.scan(this.options).then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.data = JSON.parse(barcodeData.text);
    }).catch(err => {
      console.log('Error', err);
    });
  }
}
