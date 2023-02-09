var data=fetch("purchaseorders.json")
.then(response=>(response.json()))
.then(function(veri){
    //bu en baştaki kısım adres kısmı
    var degisken=veri.mvPurchaseOrders[0].PurchaseOrderAddress;
    document.getElementById("purchaseOrderAddress").innerHTML=degisken;
    
     var degisken2=veri.mvPurchaseOrders[0].PurchaseOrderContactPerson;
    document.getElementById("purchaseOrderContactPerson").innerHTML=degisken2;
    
     var degisken3=veri.mvPurchaseOrders[0].PurchaseOrderStatus;
     document.getElementById("purchaseOrderStatus").innerHTML=degisken3;
    
     var degisken4=veri.mvPurchaseOrders[0].PurchaseOrderDetails[0].PurchaseOrderRowProductSKU;
     document.getElementById("productSKU").innerHTML=degisken4;

     var degisken5=veri.mvPurchaseOrders[0].PurchaseOrderDetails[0].PurchaseOrderRowQuantity;
     document.getElementById("quantityOrdered").innerHTML=degisken5;

     var degisken6=veri.mvPurchaseOrders[0].PurchaseOrderDetails[0].PurchaseOrderRowUnitPriceWithoutTaxOrDiscount;
     document.getElementById("unitPrice").innerHTML=degisken6;

     var degisken7=veri.mvPurchaseOrders[0].PurchaseOrderDetails[0].PurchaseOrderRowTotalAmount;
     document.getElementById("totalAmount").innerHTML=degisken7;
})