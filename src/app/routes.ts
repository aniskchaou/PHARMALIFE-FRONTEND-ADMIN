import { Routes } from "@angular/router";
import { AddbuyComponent } from "./content/modules/buy/components/addbuy/addbuy.component";
import { BuyComponent } from "./content/modules/buy/components/buy/buy.component";
import { EditBuyComponent } from "./content/modules/buy/components/edit-buy/edit-buy.component";
import { ViewBuyComponent } from "./content/modules/buy/components/view-buy/view-buy.component";
import { AddCategoryComponent } from "./content/modules/category/components/add-category/add-category.component";
import { CategoryComponent } from "./content/modules/category/components/category/category.component";
import { EditCategoryComponent } from "./content/modules/category/components/edit-category/edit-category.component";
import { AddClientComponent } from "./content/modules/client/components/add-client/add-client.component";
import { ClientComponent } from "./content/modules/client/components/client/client.component";
import { EditClientComponent } from "./content/modules/client/components/edit-client/edit-client.component";
import { ViewClientComponent } from "./content/modules/client/components/view-client/view-client.component";
import { AddConstructorComponent } from "./content/modules/constructor/components/add-constructor/add-constructor.component";
import { CustructorComponent } from "./content/modules/constructor/components/custructor/custructor.component";
import { EditConstructorComponent } from "./content/modules/constructor/components/edit-constructor/edit-constructor.component";
import { ViewConstructorComponent } from "./content/modules/constructor/components/view-constructor/view-constructor.component";
import { AddInvoiceComponent } from "./content/modules/invoice/components/add-invoice/add-invoice.component";
import { EditInvoiceComponent } from "./content/modules/invoice/components/edit-invoice/edit-invoice.component";
import { InvoiceComponent } from "./content/modules/invoice/components/invoice/invoice.component";
import { ViewInvoiceComponent } from "./content/modules/invoice/components/view-invoice/view-invoice.component";
import { AddMedicamentComponent } from "./content/modules/medicament/components/add-medicament/add-medicament.component";
import { EditMedicamentComponent } from "./content/modules/medicament/components/edit-medicament/edit-medicament.component";
import { MedicamentComponent } from "./content/modules/medicament/components/medicament/medicament.component";
import { ViewMedicamentComponent } from "./content/modules/medicament/components/view-medicament/view-medicament.component";
import { AddServiceComponent } from "./content/modules/service/components/add-service/add-service.component";
import { EditServiceComponent } from "./content/modules/service/components/edit-service/edit-service.component";
import { ServiceComponent } from "./content/modules/service/components/service/service.component";
import { ViewServiceComponent } from "./content/modules/service/components/view-service/view-service.component";
import { StockComponent } from "./content/modules/stock/components/stock/stock.component";
import { AddSupplierComponent } from "./content/modules/supplier/components/add-supplier/add-supplier.component";
import { EditSupplierComponent } from "./content/modules/supplier/components/edit-supplier/edit-supplier.component";
import { SupplierComponent } from "./content/modules/supplier/components/supplier/supplier.component";
import { AddTypeComponent } from "./content/modules/type/components/add-type/add-type.component";
import { EditTypeComponent } from "./content/modules/type/components/edit-type/edit-type.component";
import { TypeComponent } from "./content/modules/type/components/type/type.component";
import { ConfigurationComponent } from "./content/shared/configuration/configuration.component";
import { DashboardComponent } from "./content/shared/dashboard/dashboard.component";

export const routes:Routes=[
    {path:'dashboard',component:DashboardComponent},
    {path:'invoice',component:InvoiceComponent},
    {path:'addinvoice',component:AddInvoiceComponent},
    {path:'editinvoice',component:EditInvoiceComponent},
    {path:'viewinvoice',component:ViewInvoiceComponent},
    {path:'service',component:ServiceComponent},
    {path:'addservice',component:AddServiceComponent},
    {path:'editservice',component:EditServiceComponent},
    {path:'viewservice',component:ViewServiceComponent},
    {path:'client',component:ClientComponent},
    {path:'editclient',component:EditClientComponent},
    {path:'viewclient',component:ViewClientComponent},
    {path:'addclient',component:AddClientComponent},
    {path:'category',component:CategoryComponent},
    {path:'addcategory',component:AddCategoryComponent},
    {path:'editcategory',component:EditCategoryComponent},
    {path:'buy',component:BuyComponent},
    {path:'addbuy',component:AddbuyComponent},
    {path:'editbuy',component:EditBuyComponent},
    {path:'viewbuy',component:ViewBuyComponent},
    {path:'constructor',component:CustructorComponent},
    {path:'addconstructor',component:AddConstructorComponent},
    {path:'editconstructor',component:EditConstructorComponent},
    {path:'viewconstructor',component:ViewConstructorComponent},
    {path:'medicament',component:MedicamentComponent},
    {path:'addmedicament',component:AddMedicamentComponent},
    {path:'editmedicament',component:EditMedicamentComponent},
    {path:'viewmedicament',component:ViewMedicamentComponent},
    {path:'stock',component:StockComponent},
    {path:'supplier',component:SupplierComponent},
    {path:'addsupplier',component:AddSupplierComponent},
    {path:'editsupplier',component:EditSupplierComponent},
    {path:'viewsupplier',component:ViewServiceComponent},
    {path:'type',component:TypeComponent},
    {path:'addtype',component:AddTypeComponent},
    {path:'edittype',component:EditTypeComponent},
    {path:'login',component:ClientComponent},
    {path:'configuration',component:ConfigurationComponent},
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'**',redirectTo:'login',pathMatch:'full'}]