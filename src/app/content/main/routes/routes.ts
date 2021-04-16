import { Routes } from "@angular/router";
import { AddbuyComponent } from "../../modules/buy/components/addbuy/addbuy.component";
import { BuyComponent } from "../../modules/buy/components/buy/buy.component";
import { EditBuyComponent } from "../../modules/buy/components/edit-buy/edit-buy.component";
import { ViewBuyComponent } from "../../modules/buy/components/view-buy/view-buy.component";
import { AddCategoryComponent } from "../../modules/category/components/add-category/add-category.component";
import { CategoryComponent } from "../../modules/category/components/category/category.component";
import { EditCategoryComponent } from "../../modules/category/components/edit-category/edit-category.component";
import { AddClientComponent } from "../../modules/client/components/add-client/add-client.component";
import { ClientComponent } from "../../modules/client/components/client/client.component";
import { EditClientComponent } from "../../modules/client/components/edit-client/edit-client.component";
import { ViewClientComponent } from "../../modules/client/components/view-client/view-client.component";
import { AddConstructorComponent } from "../../modules/constructor/components/add-constructor/add-constructor.component";
import { CustructorComponent } from "../../modules/constructor/components/custructor/custructor.component";
import { EditConstructorComponent } from "../../modules/constructor/components/edit-constructor/edit-constructor.component";
import { ViewConstructorComponent } from "../../modules/constructor/components/view-constructor/view-constructor.component";
import { AddInvoiceComponent } from "../../modules/invoice/components/add-invoice/add-invoice.component";
import { EditInvoiceComponent } from "../../modules/invoice/components/edit-invoice/edit-invoice.component";
import { InvoiceComponent } from "../../modules/invoice/components/invoice/invoice.component";
import { ViewInvoiceComponent } from "../../modules/invoice/components/view-invoice/view-invoice.component";
import { AddMedicamentComponent } from "../../modules/medicament/components/add-medicament/add-medicament.component";
import { EditMedicamentComponent } from "../../modules/medicament/components/edit-medicament/edit-medicament.component";
import { MedicamentComponent } from "../../modules/medicament/components/medicament/medicament.component";
import { ViewMedicamentComponent } from "../../modules/medicament/components/view-medicament/view-medicament.component";
import { AddServiceComponent } from "../../modules/service/components/add-service/add-service.component";
import { EditServiceComponent } from "../../modules/service/components/edit-service/edit-service.component";
import { ServiceComponent } from "../../modules/service/components/service/service.component";
import { ViewServiceComponent } from "../../modules/service/components/view-service/view-service.component";
import { StockComponent } from "../../modules/stock/components/stock/stock.component";
import { AddSupplierComponent } from "../../modules/supplier/components/add-supplier/add-supplier.component";
import { EditSupplierComponent } from "../../modules/supplier/components/edit-supplier/edit-supplier.component";
import { SupplierComponent } from "../../modules/supplier/components/supplier/supplier.component";
import { AddTypeComponent } from "../../modules/type/components/add-type/add-type.component";
import { EditTypeComponent } from "../../modules/type/components/edit-type/edit-type.component";
import { TypeComponent } from "../../modules/type/components/type/type.component";
import { ConfigurationComponent } from "../../shared/configuration/configuration.component";
import { DashboardComponent } from "../../shared/dashboard/dashboard.component";

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'invoice', component: InvoiceComponent },
    { path: 'addinvoice', component: AddInvoiceComponent },
    { path: 'editinvoice', component: EditInvoiceComponent },
    { path: 'viewinvoice', component: ViewInvoiceComponent },
    { path: 'service', component: ServiceComponent },
    { path: 'addservice', component: AddServiceComponent },
    { path: 'editservice', component: EditServiceComponent },
    { path: 'viewservice', component: ViewServiceComponent },
    { path: 'client', component: ClientComponent },
    { path: 'editclient', component: EditClientComponent },
    { path: 'viewclient', component: ViewClientComponent },
    { path: 'addclient', component: AddClientComponent },
    { path: 'category', component: CategoryComponent },
    { path: 'addcategory', component: AddCategoryComponent },
    { path: 'editcategory', component: EditCategoryComponent },
    { path: 'buy', component: BuyComponent },
    { path: 'addbuy', component: AddbuyComponent },
    { path: 'editbuy', component: EditBuyComponent },
    { path: 'viewbuy', component: ViewBuyComponent },
    { path: 'constructor', component: CustructorComponent },
    { path: 'addconstructor', component: AddConstructorComponent },
    { path: 'editconstructor', component: EditConstructorComponent },
    { path: 'viewconstructor', component: ViewConstructorComponent },
    { path: 'medicament', component: MedicamentComponent },
    { path: 'addmedicament', component: AddMedicamentComponent },
    { path: 'editmedicament', component: EditMedicamentComponent },
    { path: 'viewmedicament', component: ViewMedicamentComponent },
    { path: 'stock', component: StockComponent },
    { path: 'supplier', component: SupplierComponent },
    { path: 'addsupplier', component: AddSupplierComponent },
    { path: 'editsupplier', component: EditSupplierComponent },
    { path: 'viewsupplier', component: ViewServiceComponent },
    { path: 'type', component: TypeComponent },
    { path: 'addtype', component: AddTypeComponent },
    { path: 'edittype', component: EditTypeComponent },
    { path: 'login', component: ClientComponent },
    { path: 'configuration', component: ConfigurationComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', redirectTo: 'login', pathMatch: 'full' }]