window.HANDBOOK_SEARCH_INDEX = [
  {
    "to": "index.html",
    "title": "Home",
    "crumb": "Overview",
    "meta": "Navigation",
    "keywords": "Home",
    "toPages": "index.html"
  },
  {
    "to": "pages/architecture.html",
    "title": "System Architecture",
    "crumb": "Overview",
    "meta": "Navigation",
    "keywords": "System Architecture",
    "toPages": "architecture.html"
  },
  {
    "to": "pages/sales-order.html",
    "title": "Sales Order Flow",
    "crumb": "Operational Flows",
    "meta": "Navigation",
    "keywords": "Sales Order Flow",
    "toPages": "sales-order.html"
  },
  {
    "to": "pages/purchase-order.html",
    "title": "Purchase Order Flow",
    "crumb": "Operational Flows",
    "meta": "Navigation",
    "keywords": "Purchase Order Flow",
    "toPages": "purchase-order.html"
  },
  {
    "to": "pages/returns.html",
    "title": "Return / RMA Flow",
    "crumb": "Operational Flows",
    "meta": "Navigation",
    "keywords": "Return / RMA Flow",
    "toPages": "returns.html"
  },
  {
    "to": "pages/inventory.html",
    "title": "Inventory Flow",
    "crumb": "Operational Flows",
    "meta": "Navigation",
    "keywords": "Inventory Flow",
    "toPages": "inventory.html"
  },
  {
    "to": "pages/integration.html",
    "title": "Integration Guide",
    "crumb": "Integration",
    "meta": "Navigation",
    "keywords": "Integration Guide",
    "toPages": "integration.html"
  },
  {
    "to": "pages/troubleshooting.html",
    "title": "Troubleshooting Matrix",
    "crumb": "Support & Reference",
    "meta": "Navigation",
    "keywords": "Troubleshooting Matrix",
    "toPages": "troubleshooting.html"
  },
  {
    "to": "pages/onboarding.html",
    "title": "Onboarding Guide",
    "crumb": "Support & Reference",
    "meta": "Navigation",
    "keywords": "Onboarding Guide",
    "toPages": "onboarding.html"
  },
  {
    "to": "pages/critical-screens.html",
    "title": "Critical Screens",
    "crumb": "Support & Reference",
    "meta": "Navigation",
    "keywords": "Critical Screens",
    "toPages": "critical-screens.html"
  },
  {
    "to": "pages/glossary.html",
    "title": "Glossary",
    "crumb": "Support & Reference",
    "meta": "Navigation",
    "keywords": "Glossary",
    "toPages": "glossary.html"
  },
  {
    "to": "pages/doc-structure.html",
    "title": "Documentation Structure",
    "crumb": "Support & Reference",
    "meta": "Navigation",
    "keywords": "Documentation Structure",
    "toPages": "doc-structure.html"
  },
  {
    "to": "pages/architecture.html",
    "title": "System Architecture Overview",
    "crumb": "Architecture",
    "meta": "Diagram, responsibilities, touchpoints",
    "keywords": "architecture data flow Shopify Rithum TechOMS Logiwa carriers sync inventory",
    "toPages": "architecture.html"
  },
  {
    "to": "pages/architecture.html#diagram",
    "title": "High-Level Architecture Diagram",
    "crumb": "Architecture",
    "keywords": "mermaid diagram flow",
    "toPages": "architecture.html#diagram"
  },
  {
    "to": "pages/integration.html#edi-flow",
    "title": "EDI Document Flow Overview",
    "crumb": "Integration Guide",
    "keywords": "850 855 856 810 846 870 940 945 EDI ASN invoice inventory",
    "toPages": "integration.html#edi-flow"
  },
  {
    "to": "pages/integration.html#data-mapping",
    "title": "Data Mapping Examples",
    "crumb": "Integration Guide",
    "keywords": "mapping field source target Shopify Logiwa Rithum",
    "toPages": "integration.html#data-mapping"
  },
  {
    "to": "pages/integration.html#sync-schedules",
    "title": "Sync Schedules",
    "crumb": "Integration Guide",
    "keywords": "job schedule frequency poll webhook inventory ship confirm",
    "toPages": "integration.html#sync-schedules"
  },
  {
    "to": "pages/integration.html#monitoring",
    "title": "Monitoring and Alerts",
    "crumb": "Integration Guide",
    "keywords": "alert monitoring page job failure ATS variance ASN",
    "toPages": "integration.html#monitoring"
  },
  {
    "to": "pages/doc-structure.html",
    "title": "Documentation Structure",
    "crumb": "Reference",
    "keywords": "Confluence Notion SharePoint Google Docs ownership review",
    "toPages": "doc-structure.html"
  },
  {
    "to": "pages/sales-order.html#customer-order-creation",
    "title": "Customer Order Creation (Shopify DTC)",
    "crumb": "Sales Order Flow + Troubleshooting",
    "meta": "Shopify · TechOMS",
    "keywords": "Capture a direct-to-consumer (DTC) order when a shopper completes checkout on the Shopify storefront, making it available for fulfillment orchestration. Shopify TechOMS Order in Shopify but not in TechOMS SKU mapping failure on import Webhook failure, connector disabled, API credential expired, or import job not running. Shopify variant SKU does not match TechOMS product SKU or alias mapping table. Shopify order exists and financial status is acceptable (paid or authorized per policy) Every line SKU maps to an active product in TechOMS Ship-to address passes validation (no missing postal code / country) TechOMS order channel reference matches Shopify order ID (dedupe check) No duplicate import for the same Shopify order ID",
    "toPages": "sales-order.html#customer-order-creation"
  },
  {
    "to": "pages/sales-order.html#channel-order-import",
    "title": "Sales Channel Order Import (Rithum / Retailer)",
    "crumb": "Sales Order Flow + Troubleshooting",
    "meta": "Rithum · TechOMS · Retailers",
    "keywords": "Import retailer and marketplace purchase orders (typically EDI 850) from Rithum into TechOMS as fulfillable sales orders. Rithum TechOMS Retailers Retailer PO in Rithum but missing in TechOMS 855 not sent / late acknowledgment Import job failure, mapping filter excluding order, or wrong retailer account. Order on hold in TechOMS, connector not configured for 855, or inventory rejection. Retailer PO number is unique — no duplicate import All retailer SKUs map to internal product SKUs Ship-by / cancel-by dates are feasible against inventory and cut-off times 855 acknowledgment sent within retailer SLA Routing and label requirements noted on the order for warehouse",
    "toPages": "sales-order.html#channel-order-import"
  },
  {
    "to": "pages/sales-order.html#techoms-processing",
    "title": "Order Processing in TechOMS",
    "crumb": "Sales Order Flow + Troubleshooting",
    "meta": "TechOMS",
    "keywords": "Apply business rules, inventory checks, and fulfillment routing so approved orders are ready for warehouse dispatch. TechOMS Order stuck On Hold Wrong warehouse routed Fraud rule, incomplete address, payment issue (DTC), manual hold, or missing custom field. Routing rule misconfiguration or inventory snapshot stale. No unexplained hold — hold reason documented ATS covers order quantity (or backorder policy applied) Correct warehouse / fulfillment channel selected Ship method matches channel requirements (retailer routing guide) Order released before warehouse cut-off for same-day ship",
    "toPages": "sales-order.html#techoms-processing"
  },
  {
    "to": "pages/sales-order.html#export-to-logiwa",
    "title": "Order Export to Logiwa",
    "crumb": "Sales Order Flow + Troubleshooting",
    "meta": "TechOMS · Logiwa",
    "keywords": "Transmit released fulfillment orders from TechOMS to Logiwa so the warehouse can allocate, pick, pack, and ship. TechOMS Logiwa Order released in TechOMS but not in Logiwa Duplicate shipment orders in Logiwa Export job failure, API timeout, SKU not in Logiwa catalog, or client/warehouse mismatch. Re-export after partial failure without idempotency check. Logiwa shipment order exists with matching reference numbers Line quantities match TechOMS exactly Client / warehouse on Logiwa order is correct TechOMS shows Logiwa external ID — not blank No export error in TechOMS job log",
    "toPages": "sales-order.html#export-to-logiwa"
  },
  {
    "to": "pages/sales-order.html#pick-pack-ship",
    "title": "Pick, Pack & Ship (Logiwa)",
    "crumb": "Sales Order Flow + Troubleshooting",
    "meta": "Logiwa · Carrier",
    "keywords": "Physically fulfill the order in the warehouse: allocate inventory, pick items, pack cartons, generate carrier labels, and ship. Logiwa Carrier Cannot allocate — insufficient inventory Carrier label failure On-hand mismatch, inventory in hold/quarantine location, or oversell due to sync lag. Invalid address, carrier account issue, overweight/oversize, or service not available to zone. Allocation successful — no short allocation without approval All lines picked — scan confirms SKU and quantity Carrier service matches order requirement (especially retailer routing) Tracking number generated before carrier cut-off Ship confirm timestamp recorded in Logiwa",
    "toPages": "sales-order.html#pick-pack-ship"
  },
  {
    "to": "pages/sales-order.html#tracking-update",
    "title": "Tracking Update Flow",
    "crumb": "Sales Order Flow + Troubleshooting",
    "meta": "Logiwa · TechOMS · Shopify · Rithum",
    "keywords": "Return shipment tracking numbers and carrier details from Logiwa through TechOMS to Shopify and Rithum so customers and retailers receive tracking information. Logiwa TechOMS Shopify Rithum Shipped in Logiwa but not in TechOMS Tracking in TechOMS but not in Shopify Late or missing 856 ASN Ship confirm sync job failure, reference mismatch, or connector down. Shopify fulfillment writeback job failure or API scope issue. ASN job delay, missing SSCC, retailer mapping error, or ship confirm not triggering ASN. Tracking number in Logiwa matches carrier portal TechOMS order shows Shipped with tracking populated Shopify fulfillment created with correct tracking (DTC) 856 ASN transmitted within retailer deadline Tracking is scannable / valid (not test label)",
    "toPages": "sales-order.html#tracking-update"
  },
  {
    "to": "pages/sales-order.html#order-status-sync",
    "title": "Order Status Updates & Synchronization",
    "crumb": "Sales Order Flow + Troubleshooting",
    "meta": "TechOMS · Logiwa · Shopify · Rithum",
    "keywords": "Keep order status consistent across TechOMS, Logiwa, Shopify, and Rithum throughout the lifecycle including holds, cancellations, and partial shipments. TechOMS Logiwa Shopify Rithum Cancel failed — already shipped Status mismatch between systems Cancel request arrived after ship confirm; sync delay masked true status. One-direction sync failure or manual override in one system only. Status in TechOMS matches warehouse reality (not shipped if marked pending) Cancellations propagated to Logiwa before pick starts Partial ship: remaining lines correctly backordered or cancelled No orphaned shipment orders in Logiwa for cancelled TechOMS orders",
    "toPages": "sales-order.html#order-status-sync"
  },
  {
    "to": "pages/purchase-order.html#po-creation",
    "title": "Purchase Order Creation",
    "crumb": "Purchase Order Flow + Troubleshooting",
    "meta": "TechOMS · Logiwa",
    "keywords": "Create a purchase order in TechOMS to instruct a vendor to ship inbound inventory to the warehouse. TechOMS Logiwa PO approved in TechOMS but not in Logiwa Inbound export job failure or SKU not in Logiwa product master. Vendor and SKU are active and mapped in both systems Ship-to warehouse is correct PO exported to Logiwa with matching line quantities Expected date is communicated to warehouse",
    "toPages": "purchase-order.html#po-creation"
  },
  {
    "to": "pages/purchase-order.html#vendor-shipment",
    "title": "Vendor Shipment Process",
    "crumb": "Purchase Order Flow + Troubleshooting",
    "meta": "TechOMS · Logiwa · Vendor",
    "keywords": "Track the physical movement of goods from vendor to warehouse between PO approval and dock arrival. TechOMS Logiwa Vendor Shipment arrived with no matching PO ASN quantities differ from PO PO not created, wrong reference on BOL, or wrong client account. Vendor short-shipped or split shipment without notice. Shipment references correct PO number Carton count matches ASN (if provided) No unexpected SKU on packing list without PO amendment",
    "toPages": "purchase-order.html#vendor-shipment"
  },
  {
    "to": "pages/purchase-order.html#logiwa-receiving",
    "title": "Receiving Workflow in Logiwa",
    "crumb": "Purchase Order Flow + Troubleshooting",
    "meta": "Logiwa",
    "keywords": "Receive inbound inventory at the warehouse dock, verify quantities and condition, and stage for putaway. Logiwa Cannot scan SKU during receiving Received qty locked — cannot edit Product not in Logiwa catalog, barcode mismatch, or wrong client. Receipt already completed and putaway started. Every line on packing list accounted for (received, short, or over with reason) SKU scans match expected SKU — no look-alike substitutions Damaged units segregated — not put into pickable inventory Lot/expiry captured for tracked products",
    "toPages": "purchase-order.html#logiwa-receiving"
  },
  {
    "to": "pages/purchase-order.html#inventory-update",
    "title": "Inventory Update Process (Post-Receiving)",
    "crumb": "Purchase Order Flow + Troubleshooting",
    "meta": "Logiwa · TechOMS · Shopify · Rithum",
    "keywords": "Move received inventory from staging to pickable locations and sync updated on-hand counts to TechOMS and sales channels. Logiwa TechOMS Shopify Rithum Received in Logiwa but ATS not updated in TechOMS Inventory sync job delay or failure; inventory in non-reporting location. Putaway complete — no inventory left in staging past SLA Logiwa on-hand increased by received qty (minus damage) TechOMS ATS updated within sync window (typically 15–30 min) Shopify/Rithum show increased availability",
    "toPages": "purchase-order.html#inventory-update"
  },
  {
    "to": "pages/purchase-order.html#po-completion",
    "title": "PO Completion Process",
    "crumb": "Purchase Order Flow + Troubleshooting",
    "meta": "TechOMS · Logiwa",
    "keywords": "Close the purchase order lifecycle when all goods are received (or exceptions documented) and inventory is available. TechOMS Logiwa PO stuck open with zero remaining but not closable Partial line not zeroed, system rounding, or unreceived ghost line. Received qty + documented shorts = ordered qty (or PO formally amended) No open expected receipt lines lingering Inventory sync confirmed after final putaway Client notified of discrepancies within SLA",
    "toPages": "purchase-order.html#po-completion"
  },
  {
    "to": "pages/purchase-order.html#receiving-issues",
    "title": "Common Receiving Issues & Debugging Checklist",
    "crumb": "Purchase Order Flow + Troubleshooting",
    "meta": "TechOMS · Logiwa · Vendor",
    "keywords": "Provide a structured approach to diagnose and resolve the most frequent inbound/receiving problems. TechOMS Logiwa Vendor Inventory discrepancy after receiving Duplicate receiving against same PO line Wrong qty entered, duplicate scan, putaway to wrong location, or sync lag mistaken for loss. Same shipment received twice or receipt not closed before second scan. Checklist completed top-to-bottom — no skipped steps Root cause documented in ticket Client notified if discrepancy affects sellable inventory",
    "toPages": "purchase-order.html#receiving-issues"
  },
  {
    "to": "pages/returns.html#return-initiation",
    "title": "Return Initiation",
    "crumb": "Return Order (RMA) Flow + Troubleshooting",
    "meta": "Shopify · Rithum · TechOMS",
    "keywords": "Begin the return process when a customer or retailer requests to send product back — via Shopify return, Rithum RMA, or TechOMS manual entry. Shopify Rithum TechOMS Return requested for unshipped order RMA not created in TechOMS from Shopify return Customer confusion or order still in fulfillment — should be cancel not return. Return sync connector failure or missing Shopify return webhook. RMA linked to valid shipped order — not cancelled/unshipped Return qty does not exceed shipped qty per line Return window policy enforced (if configured) RMA number communicated to customer on packing instructions",
    "toPages": "returns.html#return-initiation"
  },
  {
    "to": "pages/returns.html#return-authorization",
    "title": "Return Authorization",
    "crumb": "Return Order (RMA) Flow + Troubleshooting",
    "meta": "TechOMS · Shopify · Rithum · Logiwa",
    "keywords": "Approve or deny the return request per client policy and communicate authorization to customer, retailer, and warehouse. TechOMS Shopify Rithum Logiwa RMA authorized but no expected return in Logiwa Return export job failure or RMA not configured for WMS sync. Authorization within policy — reason documented if exception Expected return in Logiwa matches RMA lines Customer received label/instructions",
    "toPages": "returns.html#return-authorization"
  },
  {
    "to": "pages/returns.html#warehouse-return-receiving",
    "title": "Warehouse Return Receiving",
    "crumb": "Return Order (RMA) Flow + Troubleshooting",
    "meta": "Logiwa",
    "keywords": "Physically receive returned product at the warehouse and match it to the authorized RMA. Logiwa Return arrived with no matching RMA Unauthorized return, lost RMA reference, or RMA not synced to Logiwa. Return matched to valid authorized RMA All items scanned — unauthorized items segregated Inventory NOT in pickable location until inspection complete",
    "toPages": "returns.html#warehouse-return-receiving"
  },
  {
    "to": "pages/returns.html#inspection-process",
    "title": "Inspection Process",
    "crumb": "Return Order (RMA) Flow + Troubleshooting",
    "meta": "Logiwa · TechOMS",
    "keywords": "Evaluate returned product condition and determine disposition: restock, refurbish, donate, or destroy. Logiwa TechOMS Restocked damaged goods Inspection skipped or wrong disposition code. Every unit has disposition — none left in quarantine past SLA Restocked units meet grade A/sellable standard Damage units not in pickable locations Wrong-SKU returns flagged to client",
    "toPages": "returns.html#inspection-process"
  },
  {
    "to": "pages/returns.html#inventory-adjustment",
    "title": "Inventory Adjustment (Returns)",
    "crumb": "Return Order (RMA) Flow + Troubleshooting",
    "meta": "Logiwa · TechOMS · Shopify · Rithum",
    "keywords": "Update inventory records to reflect return disposition and sync changes to TechOMS and channels. Logiwa TechOMS Shopify Rithum ATS increased for damaged return Wrong disposition or sync counted quarantine as available. Pickable qty increase matches sellable inspection count only Damage adjustments have reason code and approval TechOMS ATS reflects change within sync window",
    "toPages": "returns.html#inventory-adjustment"
  },
  {
    "to": "pages/returns.html#refund-workflow",
    "title": "Refund Workflow",
    "crumb": "Return Order (RMA) Flow + Troubleshooting",
    "meta": "TechOMS · Shopify · Rithum",
    "keywords": "Process customer or retailer refund/credit after return is received and inspected per policy. TechOMS Shopify Rithum Refund issued but return never received Customer claims no refund Auto-refund rule triggered before warehouse receipt (policy misconfiguration). Refund to alternate payment method delay, or Shopify sync failure. Refund amount matches policy for disposition No double refund — check prior refund transactions RMA closed only after refund or documented denial Restocking fee applied if configured",
    "toPages": "returns.html#refund-workflow"
  },
  {
    "to": "pages/returns.html#return-status-sync",
    "title": "Return Status Synchronization",
    "crumb": "Return Order (RMA) Flow + Troubleshooting",
    "meta": "TechOMS · Logiwa · Shopify · Rithum",
    "keywords": "Keep return/RMA status consistent across TechOMS, Logiwa, Shopify, and Rithum throughout the return lifecycle. TechOMS Logiwa Shopify Rithum Received in Logiwa but TechOMS still Authorized Return receipt sync job failure. Status in all systems reflects same lifecycle stage Received in Logiwa → TechOMS shows Received within sync window Refund in TechOMS → Shopify shows refunded",
    "toPages": "returns.html#return-status-sync"
  },
  {
    "to": "pages/inventory.html#inventory-receiving",
    "title": "Inventory Receiving (Inbound)",
    "crumb": "Inventory Flow + Troubleshooting",
    "meta": "Logiwa · TechOMS",
    "keywords": "Increase on-hand inventory when inbound POs and returns are received and put away to pickable locations. Logiwa TechOMS Received but ATS unchanged Inventory in staging/non-pickable location or sync delay. Putaway complete Only pickable locations count toward ATS Sync job success",
    "toPages": "inventory.html#inventory-receiving"
  },
  {
    "to": "pages/inventory.html#inventory-allocation",
    "title": "Inventory Allocation",
    "crumb": "Inventory Flow + Troubleshooting",
    "meta": "Logiwa",
    "keywords": "Reserve specific on-hand inventory against shipment orders so pickers are directed to correct locations. Logiwa Allocation failed — insufficient available On-hand exists but already allocated to other orders, or in non-pickable location. Allocation qty = order line qty (or short approved) No negative available after allocation Locations are pickable and not quarantine",
    "toPages": "inventory.html#inventory-allocation"
  },
  {
    "to": "pages/inventory.html#inventory-reservation",
    "title": "Inventory Reservation (OMS + WMS)",
    "crumb": "Inventory Flow + Troubleshooting",
    "meta": "TechOMS · Logiwa",
    "keywords": "Soft-reserve inventory at OMS level and hard-allocate at WMS to prevent overselling across channels. TechOMS Logiwa Oversell — ATS showed stock but allocation failed ATS sync lag; TechOMS ATS higher than Logiwa available. ATS never negative in TechOMS Sum of open order reservations + ATS ≈ Logiwa available Cancelled orders release reservation in both systems",
    "toPages": "inventory.html#inventory-reservation"
  },
  {
    "to": "pages/inventory.html#inventory-adjustment",
    "title": "Inventory Adjustment",
    "crumb": "Inventory Flow + Troubleshooting",
    "meta": "Logiwa · TechOMS",
    "keywords": "Correct on-hand quantities for damage, loss, found stock, receiving corrections, or write-offs. Logiwa TechOMS Adjustment made but ATS unchanged Sync delay or adjusted non-reporting location. Reason code mandatory Supervisor approval for adjustments above threshold Channel ATS reflects change after sync No adjustment without physical verification",
    "toPages": "inventory.html#inventory-adjustment"
  },
  {
    "to": "pages/inventory.html#inventory-sync",
    "title": "Cross-System Inventory Synchronization",
    "crumb": "Inventory Flow + Troubleshooting",
    "meta": "Logiwa · TechOMS · Shopify · Rithum",
    "keywords": "Keep Logiwa on-hand, TechOMS ATS, Shopify, and Rithum (846) inventory feeds aligned. Logiwa TechOMS Shopify Rithum Channel shows stock but warehouse cannot allocate 846 rejected by Rithum ATS inflated vs Logiwa; stale sync or missing reservation logic. Invalid retailer SKU mapping, bad qty, or format non-compliance. Sync jobs running on schedule — no gaps > 2x interval ATS ≤ Logiwa available for each SKU Channel inventory matches TechOMS ATS within tolerance 846 accepted by Rithum without rejection",
    "toPages": "inventory.html#inventory-sync"
  },
  {
    "to": "pages/inventory.html#inventory-reconciliation",
    "title": "Inventory Reconciliation Process",
    "crumb": "Inventory Flow + Troubleshooting",
    "meta": "Logiwa · TechOMS · Shopify · Rithum",
    "keywords": "Systematically identify and resolve inventory discrepancies between Logiwa, TechOMS, and channels. Logiwa TechOMS Shopify Rithum Recurring variance on same SKU Systemic issue: sync failure, pick not confirmed, duplicate SKU mapping, or theft. Reconciliation run at least weekly per client Every variance has documented root cause Corrections made in Logiwa before channel Post-fix variance within threshold",
    "toPages": "inventory.html#inventory-reconciliation"
  },
  {
    "to": "pages/inventory.html#cycle-count",
    "title": "Cycle Count Process",
    "crumb": "Inventory Flow + Troubleshooting",
    "meta": "Logiwa",
    "keywords": "Periodically count physical inventory in locations to verify system accuracy and correct drift. Logiwa Large cycle count variance Mis-pick not caught, putaway error, theft, or receiving error. Blind count procedure followed Recount before adjustment if variance > tolerance Supervisor approves adjustments",
    "toPages": "inventory.html#cycle-count"
  },
  {
    "to": "pages/inventory.html#mismatch-methodology",
    "title": "Inventory Mismatch Troubleshooting Methodology",
    "crumb": "Inventory Flow + Troubleshooting",
    "meta": "Logiwa · TechOMS · Shopify · Rithum",
    "keywords": "Provide a repeatable methodology for diagnosing inventory discrepancies across the full stack. Logiwa TechOMS Shopify Rithum Phantom inventory — ATS > 0 but warehouse empty Negative available in Logiwa Ship confirm not processed, adjustment missing, or inventory in wrong client account. Over-allocation or pick confirm without allocation. All 9 steps completed Post-fix three-way match Ticket documents root cause category",
    "toPages": "inventory.html#mismatch-methodology"
  },
  {
    "to": "pages/integration.html#shopify-techoms",
    "title": "Shopify → TechOMS",
    "crumb": "Integration Guide",
    "meta": "Shopify · TechOMS",
    "keywords": "Import DTC orders and product catalog from Shopify; write back fulfillments, tracking, and inventory. Shopify TechOMS 401 Unauthorized on Shopify API Inventory push mismatch",
    "toPages": "integration.html#shopify-techoms"
  },
  {
    "to": "pages/integration.html#rithum-techoms",
    "title": "Rithum → TechOMS",
    "crumb": "Integration Guide",
    "meta": "Rithum · TechOMS",
    "keywords": "Import retailer POs and return authorizations; export ASNs, invoices, inventory feeds, and status. Rithum TechOMS 856 rejected — invalid SSCC 850 import skipped",
    "toPages": "integration.html#rithum-techoms"
  },
  {
    "to": "pages/integration.html#techoms-logiwa",
    "title": "TechOMS → Logiwa",
    "crumb": "Integration Guide",
    "meta": "TechOMS · Logiwa",
    "keywords": "Export fulfillment orders, purchase orders, and return expectations to Logiwa for warehouse execution. TechOMS Logiwa API timeout on export",
    "toPages": "integration.html#techoms-logiwa"
  },
  {
    "to": "pages/integration.html#logiwa-techoms",
    "title": "Logiwa → TechOMS",
    "crumb": "Integration Guide",
    "meta": "Logiwa · TechOMS",
    "keywords": "Return ship confirmations, inventory snapshots, and receiving completions to TechOMS. Logiwa TechOMS Ship confirm reference not found",
    "toPages": "integration.html#logiwa-techoms"
  },
  {
    "to": "pages/integration.html#carrier-integrations",
    "title": "Carrier Integrations",
    "crumb": "Integration Guide",
    "meta": "Logiwa · Carrier",
    "keywords": "Generate shipping labels, obtain tracking numbers, and retrieve tracking events via carrier APIs through Logiwa. Logiwa Carrier Address validation failure",
    "toPages": "integration.html#carrier-integrations"
  },
  {
    "to": "pages/troubleshooting.html",
    "title": "Order in Shopify but not in TechOMS",
    "crumb": "Troubleshooting Matrix",
    "meta": "TechOMS · High",
    "keywords": "Order in Shopify but not in TechOMS Webhook/import failure, expired API token Check connector status; re-run import for order date TechOMS",
    "toPages": "troubleshooting.html"
  },
  {
    "to": "pages/troubleshooting.html",
    "title": "Retailer PO in Rithum but not TechOMS",
    "crumb": "Troubleshooting Matrix",
    "meta": "TechOMS · High",
    "keywords": "Retailer PO in Rithum but not TechOMS Import job failure, trading partner mapping Check import log; verify partner ID; manual import TechOMS",
    "toPages": "troubleshooting.html"
  },
  {
    "to": "pages/troubleshooting.html",
    "title": "Order in TechOMS but not Logiwa",
    "crumb": "Troubleshooting Matrix",
    "meta": "TechOMS → Logiwa · High",
    "keywords": "Order in TechOMS but not Logiwa Export job failure, SKU not in Logiwa Check export log; verify SKU in Logiwa product master TechOMS → Logiwa",
    "toPages": "troubleshooting.html"
  },
  {
    "to": "pages/troubleshooting.html",
    "title": "Cannot allocate in Logiwa",
    "crumb": "Troubleshooting Matrix",
    "meta": "Logiwa · High",
    "keywords": "Cannot allocate in Logiwa Insufficient available, inventory in quarantine Compare on-hand vs available; check location types Logiwa",
    "toPages": "troubleshooting.html"
  },
  {
    "to": "pages/troubleshooting.html",
    "title": "Shipped in Logiwa, no tracking in Shopify",
    "crumb": "Troubleshooting Matrix",
    "meta": "TechOMS → Shopify · High",
    "keywords": "Shipped in Logiwa, no tracking in Shopify Ship confirm or fulfillment writeback failure Verify ship confirm in TechOMS; re-run fulfillment export TechOMS → Shopify",
    "toPages": "troubleshooting.html"
  },
  {
    "to": "pages/troubleshooting.html",
    "title": "Shipped but no 856 ASN to retailer",
    "crumb": "Troubleshooting Matrix",
    "meta": "TechOMS → Rithum · High",
    "keywords": "Shipped but no 856 ASN to retailer ASN job failure, missing SSCC Check ASN queue; verify carton SSCC in ship confirm TechOMS → Rithum",
    "toPages": "troubleshooting.html"
  },
  {
    "to": "pages/troubleshooting.html",
    "title": "Channel shows stock, warehouse empty",
    "crumb": "Troubleshooting Matrix",
    "meta": "Inventory sync · High",
    "keywords": "Channel shows stock, warehouse empty Stale ATS feed, ship confirm backlog Compare Logiwa on-hand vs TechOMS ATS; pause channel feed Inventory sync",
    "toPages": "troubleshooting.html"
  },
  {
    "to": "pages/troubleshooting.html",
    "title": "Oversell — order accepted but no stock",
    "crumb": "Troubleshooting Matrix",
    "meta": "Inventory sync · High",
    "keywords": "Oversell — order accepted but no stock ATS > Logiwa available, sync lag Reconcile ATS; backorder/cancel newest orders Inventory sync",
    "toPages": "troubleshooting.html"
  },
  {
    "to": "pages/troubleshooting.html",
    "title": "Carrier label generation failed",
    "crumb": "Troubleshooting Matrix",
    "meta": "Logiwa / Carrier · Medium",
    "keywords": "Carrier label generation failed Bad address, invalid service, account issue Validate address; check carrier API error; try backup carrier Logiwa / Carrier",
    "toPages": "troubleshooting.html"
  },
  {
    "to": "pages/troubleshooting.html",
    "title": "PO approved but not in Logiwa",
    "crumb": "Troubleshooting Matrix",
    "meta": "TechOMS → Logiwa · Medium",
    "keywords": "PO approved but not in Logiwa PO export failure, SKU missing Re-run PO export; verify SKU setup TechOMS → Logiwa",
    "toPages": "troubleshooting.html"
  },
  {
    "to": "pages/troubleshooting.html",
    "title": "Received inventory not in channel ATS",
    "crumb": "Troubleshooting Matrix",
    "meta": "Inventory sync · Medium",
    "keywords": "Received inventory not in channel ATS Putaway incomplete, sync delay Confirm putaway to pickable; re-run inventory sync Inventory sync",
    "toPages": "troubleshooting.html"
  },
  {
    "to": "pages/troubleshooting.html",
    "title": "Receiving qty mismatch",
    "crumb": "Troubleshooting Matrix",
    "meta": "Logiwa · Medium",
    "keywords": "Receiving qty mismatch Vendor short ship, count error Document discrepancy; receive actual qty; notify client Logiwa",
    "toPages": "troubleshooting.html"
  },
  {
    "to": "pages/troubleshooting.html",
    "title": "Return received, no refund issued",
    "crumb": "Troubleshooting Matrix",
    "meta": "TechOMS → Shopify · Medium",
    "keywords": "Return received, no refund issued Inspection pending, refund rule not triggered Check RMA status and inspection disposition; trigger refund TechOMS → Shopify",
    "toPages": "troubleshooting.html"
  },
  {
    "to": "pages/troubleshooting.html",
    "title": "RMA authorized but not in Logiwa",
    "crumb": "Troubleshooting Matrix",
    "meta": "TechOMS → Logiwa · Medium",
    "keywords": "RMA authorized but not in Logiwa Return export failure Re-run return export; create expected return manually TechOMS → Logiwa",
    "toPages": "troubleshooting.html"
  },
  {
    "to": "pages/troubleshooting.html",
    "title": "855 acknowledgment late/missing",
    "crumb": "Troubleshooting Matrix",
    "meta": "TechOMS → Rithum · High",
    "keywords": "855 acknowledgment late/missing Order on hold, ack job failure Release hold; trigger 855; check cancel-by deadline TechOMS → Rithum",
    "toPages": "troubleshooting.html"
  },
  {
    "to": "pages/troubleshooting.html",
    "title": "846 inventory feed rejected",
    "crumb": "Troubleshooting Matrix",
    "meta": "TechOMS → Rithum · Medium",
    "keywords": "846 inventory feed rejected Bad retailer SKU mapping, negative qty Fix SKU cross-ref; resend 846 TechOMS → Rithum",
    "toPages": "troubleshooting.html"
  },
  {
    "to": "pages/troubleshooting.html",
    "title": "Duplicate shipment orders in Logiwa",
    "crumb": "Troubleshooting Matrix",
    "meta": "TechOMS → Logiwa · High",
    "keywords": "Duplicate shipment orders in Logiwa Re-export without idempotency Cancel duplicate before pick; fix dedupe config TechOMS → Logiwa",
    "toPages": "troubleshooting.html"
  },
  {
    "to": "pages/troubleshooting.html",
    "title": "Order stuck On Hold in TechOMS",
    "crumb": "Troubleshooting Matrix",
    "meta": "TechOMS · Medium",
    "keywords": "Order stuck On Hold in TechOMS Fraud rule, bad address, missing field Read hold reason; fix data; release hold TechOMS",
    "toPages": "troubleshooting.html"
  },
  {
    "to": "pages/troubleshooting.html",
    "title": "Cancel request failed — already shipped",
    "crumb": "Troubleshooting Matrix",
    "meta": "Multi-system · Medium",
    "keywords": "Cancel request failed — already shipped Cancel arrived after ship confirm Reject cancel; initiate return if needed Multi-system",
    "toPages": "troubleshooting.html"
  },
  {
    "to": "pages/troubleshooting.html",
    "title": "SKU mapping failure on import",
    "crumb": "Troubleshooting Matrix",
    "meta": "TechOMS · High",
    "keywords": "SKU mapping failure on import SKU not in product master or alias table Add SKU mapping; re-import order TechOMS",
    "toPages": "troubleshooting.html"
  },
  {
    "to": "pages/troubleshooting.html",
    "title": "Wrong warehouse routed",
    "crumb": "Troubleshooting Matrix",
    "meta": "TechOMS · Medium",
    "keywords": "Wrong warehouse routed Routing rule misconfiguration Reassign fulfillment channel; review routing rules TechOMS",
    "toPages": "troubleshooting.html"
  },
  {
    "to": "pages/troubleshooting.html",
    "title": "Tracking number invalid / not scannable",
    "crumb": "Troubleshooting Matrix",
    "meta": "Logiwa / Carrier · Medium",
    "keywords": "Tracking number invalid / not scannable Test label, voided shipment, typo Verify in carrier portal; re-ship if voided Logiwa / Carrier",
    "toPages": "troubleshooting.html"
  },
  {
    "to": "pages/troubleshooting.html",
    "title": "Cycle count large variance",
    "crumb": "Troubleshooting Matrix",
    "meta": "Logiwa · Medium",
    "keywords": "Cycle count large variance Pick error, theft, receiving mistake Recount; pull transaction history; adjust with approval Logiwa",
    "toPages": "troubleshooting.html"
  },
  {
    "to": "pages/troubleshooting.html",
    "title": "Negative available in Logiwa",
    "crumb": "Troubleshooting Matrix",
    "meta": "Logiwa · High",
    "keywords": "Negative available in Logiwa Over-allocation, pick without allocation Release stale allocations; review pick transactions Logiwa",
    "toPages": "troubleshooting.html"
  },
  {
    "to": "pages/troubleshooting.html",
    "title": "Retailer chargeback for late shipment",
    "crumb": "Troubleshooting Matrix",
    "meta": "Multi-system · High",
    "keywords": "Retailer chargeback for late shipment Warehouse delay, export failure, carrier miss Trace timeline; document root cause for dispute Multi-system",
    "toPages": "troubleshooting.html"
  },
  {
    "to": "pages/troubleshooting.html",
    "title": "Shopify inventory not updating",
    "crumb": "Troubleshooting Matrix",
    "meta": "TechOMS → Shopify · Medium",
    "keywords": "Shopify inventory not updating Inventory push job failure, location mapping Check push job log; verify variant mapping TechOMS → Shopify",
    "toPages": "troubleshooting.html"
  },
  {
    "to": "pages/troubleshooting.html",
    "title": "Unauthorized return received at dock",
    "crumb": "Troubleshooting Matrix",
    "meta": "Logiwa · Low",
    "keywords": "Unauthorized return received at dock No RMA, customer sent without authorization Quarantine; lookup order in TechOMS; create retroactive RMA Logiwa",
    "toPages": "troubleshooting.html"
  },
  {
    "to": "pages/troubleshooting.html",
    "title": "Restocked damaged return",
    "crumb": "Troubleshooting Matrix",
    "meta": "Logiwa · High",
    "keywords": "Restocked damaged return Inspection skipped or wrong disposition Pull from pickable immediately; re-inspect; adjust Logiwa",
    "toPages": "troubleshooting.html"
  },
  {
    "to": "pages/troubleshooting.html",
    "title": "API 401 / authentication errors",
    "crumb": "Troubleshooting Matrix",
    "meta": "Any connector · High",
    "keywords": "API 401 / authentication errors Expired credentials, revoked tokens Re-authenticate connector; test API call Any connector",
    "toPages": "troubleshooting.html"
  },
  {
    "to": "pages/troubleshooting.html",
    "title": "Partial ship not reflected on order",
    "crumb": "Troubleshooting Matrix",
    "meta": "TechOMS · Medium",
    "keywords": "Partial ship not reflected on order Partial ship handling not configured Verify partial ship lines; manually update remaining qty TechOMS",
    "toPages": "troubleshooting.html"
  },
  {
    "to": "pages/glossary.html",
    "title": "CN",
    "crumb": "Glossary",
    "meta": "Third-Party Logistics provider. A company that handles warehousing, fulfillment,…",
    "keywords": "CN Third-Party Logistics provider. A company that handles warehousing, fulfillment, and shipping on behalf of brands/clients.",
    "toPages": "glossary.html"
  },
  {
    "to": "pages/glossary.html",
    "title": "OMS",
    "crumb": "Glossary",
    "meta": "Order Management System. Orchestrates orders across sales channels and fulfillme…",
    "keywords": "OMS Order Management System. Orchestrates orders across sales channels and fulfillment locations. TechOMS is our OMS.",
    "toPages": "glossary.html"
  },
  {
    "to": "pages/glossary.html",
    "title": "WMS",
    "crumb": "Glossary",
    "meta": "Warehouse Management System. Manages physical inventory and warehouse operations…",
    "keywords": "WMS Warehouse Management System. Manages physical inventory and warehouse operations. Logiwa is our WMS.",
    "toPages": "glossary.html"
  },
  {
    "to": "pages/glossary.html",
    "title": "ATS",
    "crumb": "Glossary",
    "meta": "Available-to-Sell. Quantity that can be sold on channels. Typically on-hand minu…",
    "keywords": "ATS Available-to-Sell. Quantity that can be sold on channels. Typically on-hand minus reservations, safety stock, and holds.",
    "toPages": "glossary.html"
  },
  {
    "to": "pages/glossary.html",
    "title": "On-Hand",
    "crumb": "Glossary",
    "meta": "Physical inventory quantity in the warehouse. Logiwa is the system of record for…",
    "keywords": "On-Hand Physical inventory quantity in the warehouse. Logiwa is the system of record for on-hand.",
    "toPages": "glossary.html"
  },
  {
    "to": "pages/glossary.html",
    "title": "Allocation",
    "crumb": "Glossary",
    "meta": "Reserving specific inventory (location + qty) against a shipment order for picki…",
    "keywords": "Allocation Reserving specific inventory (location + qty) against a shipment order for picking.",
    "toPages": "glossary.html"
  },
  {
    "to": "pages/glossary.html",
    "title": "Reservation",
    "crumb": "Glossary",
    "meta": "Soft hold on inventory at OMS level to prevent overselling before WMS hard alloc…",
    "keywords": "Reservation Soft hold on inventory at OMS level to prevent overselling before WMS hard allocation.",
    "toPages": "glossary.html"
  },
  {
    "to": "pages/glossary.html",
    "title": "SKU",
    "crumb": "Glossary",
    "meta": "Stock Keeping Unit. Unique identifier for a product variant used across all syst…",
    "keywords": "SKU Stock Keeping Unit. Unique identifier for a product variant used across all systems.",
    "toPages": "glossary.html"
  },
  {
    "to": "pages/glossary.html",
    "title": "UPC",
    "crumb": "Glossary",
    "meta": "Universal Product Code. Barcode on product packaging; may differ from internal S…",
    "keywords": "UPC Universal Product Code. Barcode on product packaging; may differ from internal SKU.",
    "toPages": "glossary.html"
  },
  {
    "to": "pages/glossary.html",
    "title": "DTC",
    "crumb": "Glossary",
    "meta": "Direct-to-Consumer. Sales through brand-owned channels like Shopify, not through…",
    "keywords": "DTC Direct-to-Consumer. Sales through brand-owned channels like Shopify, not through retailers.",
    "toPages": "glossary.html"
  },
  {
    "to": "pages/glossary.html",
    "title": "Dropship",
    "crumb": "Glossary",
    "meta": "Fulfillment model where the CN ships directly to the end consumer on behalf of …",
    "keywords": "Dropship Fulfillment model where the CN ships directly to the end consumer on behalf of a retailer.",
    "toPages": "glossary.html"
  },
  {
    "to": "pages/glossary.html",
    "title": "EDI",
    "crumb": "Glossary",
    "meta": "Electronic Data Interchange. Standardized business documents (850, 856, etc.) ex…",
    "keywords": "EDI Electronic Data Interchange. Standardized business documents (850, 856, etc.) exchanged between trading partners.",
    "toPages": "glossary.html"
  },
  {
    "to": "pages/glossary.html",
    "title": "850",
    "crumb": "Glossary",
    "meta": "EDI Purchase Order. Retailer order sent to supplier/CN. Creates a sales order i…",
    "keywords": "850 EDI Purchase Order. Retailer order sent to supplier/CN. Creates a sales order in TechOMS.",
    "toPages": "glossary.html"
  },
  {
    "to": "pages/glossary.html",
    "title": "855",
    "crumb": "Glossary",
    "meta": "EDI PO Acknowledgment. Response accepting, rejecting, or changing PO lines.",
    "keywords": "855 EDI PO Acknowledgment. Response accepting, rejecting, or changing PO lines.",
    "toPages": "glossary.html"
  },
  {
    "to": "pages/glossary.html",
    "title": "856",
    "crumb": "Glossary",
    "meta": "EDI Advance Ship Notice (ASN). Notifies retailer of shipment with tracking and c…",
    "keywords": "856 EDI Advance Ship Notice (ASN). Notifies retailer of shipment with tracking and carton details.",
    "toPages": "glossary.html"
  },
  {
    "to": "pages/glossary.html",
    "title": "810",
    "crumb": "Glossary",
    "meta": "EDI Invoice. Bills the retailer for shipped merchandise.",
    "keywords": "810 EDI Invoice. Bills the retailer for shipped merchandise.",
    "toPages": "glossary.html"
  },
  {
    "to": "pages/glossary.html",
    "title": "846",
    "crumb": "Glossary",
    "meta": "EDI Inventory Advice. Periodic inventory availability feed to retailers/marketpl…",
    "keywords": "846 EDI Inventory Advice. Periodic inventory availability feed to retailers/marketplaces.",
    "toPages": "glossary.html"
  },
  {
    "to": "pages/glossary.html",
    "title": "870",
    "crumb": "Glossary",
    "meta": "EDI Order Status. Status updates and cancellation requests/responses.",
    "keywords": "870 EDI Order Status. Status updates and cancellation requests/responses.",
    "toPages": "glossary.html"
  },
  {
    "to": "pages/glossary.html",
    "title": "940",
    "crumb": "Glossary",
    "meta": "EDI Warehouse Shipping Order. Optional document instructing WMS to fulfill (ofte…",
    "keywords": "940 EDI Warehouse Shipping Order. Optional document instructing WMS to fulfill (often replaced by API).",
    "toPages": "glossary.html"
  },
  {
    "to": "pages/glossary.html",
    "title": "945",
    "crumb": "Glossary",
    "meta": "EDI Warehouse Shipping Advice. Optional WMS ship confirmation back to OMS (often…",
    "keywords": "945 EDI Warehouse Shipping Advice. Optional WMS ship confirmation back to OMS (often replaced by API).",
    "toPages": "glossary.html"
  },
  {
    "to": "pages/glossary.html",
    "title": "ASN",
    "crumb": "Glossary",
    "meta": "Advance Ship Notice. Same as EDI 856. Critical for retailer compliance.",
    "keywords": "ASN Advance Ship Notice. Same as EDI 856. Critical for retailer compliance.",
    "toPages": "glossary.html"
  },
  {
    "to": "pages/glossary.html",
    "title": "SSCC",
    "crumb": "Glossary",
    "meta": "Serial Shipping Container Code. 18-digit barcode on cartons (UCC-128) required b…",
    "keywords": "SSCC Serial Shipping Container Code. 18-digit barcode on cartons (UCC-128) required by many retailers.",
    "toPages": "glossary.html"
  },
  {
    "to": "pages/glossary.html",
    "title": "UCC-128",
    "crumb": "Glossary",
    "meta": "Barcode label standard for retail cartons and pallets. Required on ASN.",
    "keywords": "UCC-128 Barcode label standard for retail cartons and pallets. Required on ASN.",
    "toPages": "glossary.html"
  },
  {
    "to": "pages/glossary.html",
    "title": "RMA",
    "crumb": "Glossary",
    "meta": "Return Merchandise Authorization. Approved return record linking to original ord…",
    "keywords": "RMA Return Merchandise Authorization. Approved return record linking to original order.",
    "toPages": "glossary.html"
  },
  {
    "to": "pages/glossary.html",
    "title": "PO",
    "crumb": "Glossary",
    "meta": "Purchase Order. Inbound order to vendor for replenishment stock.",
    "keywords": "PO Purchase Order. Inbound order to vendor for replenishment stock.",
    "toPages": "glossary.html"
  },
  {
    "to": "pages/glossary.html",
    "title": "BOL",
    "crumb": "Glossary",
    "meta": "Bill of Lading. Shipping document for freight/LTL inbound shipments.",
    "keywords": "BOL Bill of Lading. Shipping document for freight/LTL inbound shipments.",
    "toPages": "glossary.html"
  },
  {
    "to": "pages/glossary.html",
    "title": "LTL",
    "crumb": "Glossary",
    "meta": "Less Than Truckload. Freight shipping for palletized inbound shipments.",
    "keywords": "LTL Less Than Truckload. Freight shipping for palletized inbound shipments.",
    "toPages": "glossary.html"
  },
  {
    "to": "pages/glossary.html",
    "title": "Wave",
    "crumb": "Glossary",
    "meta": "Group of shipment orders released together for picking in the warehouse.",
    "keywords": "Wave Group of shipment orders released together for picking in the warehouse.",
    "toPages": "glossary.html"
  },
  {
    "to": "pages/glossary.html",
    "title": "Pick Task",
    "crumb": "Glossary",
    "meta": "Directed instruction to retrieve specific SKU/qty from a specific location.",
    "keywords": "Pick Task Directed instruction to retrieve specific SKU/qty from a specific location.",
    "toPages": "glossary.html"
  },
  {
    "to": "pages/glossary.html",
    "title": "Putaway",
    "crumb": "Glossary",
    "meta": "Moving received inventory from staging to storage/pick locations.",
    "keywords": "Putaway Moving received inventory from staging to storage/pick locations.",
    "toPages": "glossary.html"
  },
  {
    "to": "pages/glossary.html",
    "title": "Cycle Count",
    "crumb": "Glossary",
    "meta": "Periodic physical count of inventory in specific locations to verify system accu…",
    "keywords": "Cycle Count Periodic physical count of inventory in specific locations to verify system accuracy.",
    "toPages": "glossary.html"
  },
  {
    "to": "pages/glossary.html",
    "title": "Quarantine",
    "crumb": "Glossary",
    "meta": "Non-pickable location for returns, damage, or holds pending inspection.",
    "keywords": "Quarantine Non-pickable location for returns, damage, or holds pending inspection.",
    "toPages": "glossary.html"
  },
  {
    "to": "pages/glossary.html",
    "title": "Short Ship",
    "crumb": "Glossary",
    "meta": "Shipping fewer units than ordered. Requires approval and status update on remain…",
    "keywords": "Short Ship Shipping fewer units than ordered. Requires approval and status update on remaining qty.",
    "toPages": "glossary.html"
  },
  {
    "to": "pages/glossary.html",
    "title": "Backorder",
    "crumb": "Glossary",
    "meta": "Order line accepted but cannot ship until inventory is available.",
    "keywords": "Backorder Order line accepted but cannot ship until inventory is available.",
    "toPages": "glossary.html"
  },
  {
    "to": "pages/glossary.html",
    "title": "Oversell",
    "crumb": "Glossary",
    "meta": "Selling more units than physically available. Usually caused by inventory sync l…",
    "keywords": "Oversell Selling more units than physically available. Usually caused by inventory sync lag.",
    "toPages": "glossary.html"
  },
  {
    "to": "pages/glossary.html",
    "title": "SLA",
    "crumb": "Glossary",
    "meta": "Service Level Agreement. Contracted timeframes for ship, ack, ASN, etc.",
    "keywords": "SLA Service Level Agreement. Contracted timeframes for ship, ack, ASN, etc.",
    "toPages": "glossary.html"
  },
  {
    "to": "pages/glossary.html",
    "title": "Cancel-By",
    "crumb": "Glossary",
    "meta": "Retailer deadline to accept or reject a PO. Missing this may auto-cancel the ord…",
    "keywords": "Cancel-By Retailer deadline to accept or reject a PO. Missing this may auto-cancel the order.",
    "toPages": "glossary.html"
  },
  {
    "to": "pages/glossary.html",
    "title": "Ship-By",
    "crumb": "Glossary",
    "meta": "Date by which order must ship to meet retailer SLA.",
    "keywords": "Ship-By Date by which order must ship to meet retailer SLA.",
    "toPages": "glossary.html"
  },
  {
    "to": "pages/glossary.html",
    "title": "Routing Guide",
    "crumb": "Glossary",
    "meta": "Retailer-specific rules for carriers, labels, packaging, and ASN format.",
    "keywords": "Routing Guide Retailer-specific rules for carriers, labels, packaging, and ASN format.",
    "toPages": "glossary.html"
  },
  {
    "to": "pages/glossary.html",
    "title": "Trading Partner",
    "crumb": "Glossary",
    "meta": "A retailer or marketplace connected via EDI/Rithum with unique ID and requiremen…",
    "keywords": "Trading Partner A retailer or marketplace connected via EDI/Rithum with unique ID and requirements.",
    "toPages": "glossary.html"
  },
  {
    "to": "pages/glossary.html",
    "title": "IntegratedFlow",
    "crumb": "Glossary",
    "meta": "TechOMS connector framework for API integrations between systems.",
    "keywords": "IntegratedFlow TechOMS connector framework for API integrations between systems.",
    "toPages": "glossary.html"
  },
  {
    "to": "pages/glossary.html",
    "title": "Fulfillment Channel",
    "crumb": "Glossary",
    "meta": "TechOMS configuration linking to a WMS (Logiwa) for order export and ship confir…",
    "keywords": "Fulfillment Channel TechOMS configuration linking to a WMS (Logiwa) for order export and ship confirm.",
    "toPages": "glossary.html"
  },
  {
    "to": "pages/glossary.html",
    "title": "Sales Channel",
    "crumb": "Glossary",
    "meta": "TechOMS configuration linking to a demand source (Shopify, Rithum).",
    "keywords": "Sales Channel TechOMS configuration linking to a demand source (Shopify, Rithum).",
    "toPages": "glossary.html"
  },
  {
    "to": "pages/glossary.html",
    "title": "SCAC",
    "crumb": "Glossary",
    "meta": "Standard Carrier Alpha Code. 2-4 letter carrier identifier used in EDI (e.g. UPS…",
    "keywords": "SCAC Standard Carrier Alpha Code. 2-4 letter carrier identifier used in EDI (e.g. UPS, FDXE).",
    "toPages": "glossary.html"
  },
  {
    "to": "pages/glossary.html",
    "title": "WISMO",
    "crumb": "Glossary",
    "meta": "Where Is My Order. Customer inquiry about order status — usually needs tracking …",
    "keywords": "WISMO Where Is My Order. Customer inquiry about order status — usually needs tracking lookup.",
    "toPages": "glossary.html"
  },
  {
    "to": "pages/glossary.html",
    "title": "Chargeback",
    "crumb": "Glossary",
    "meta": "Financial penalty from retailer for compliance failure (late ship, missing ASN, …",
    "keywords": "Chargeback Financial penalty from retailer for compliance failure (late ship, missing ASN, etc.).",
    "toPages": "glossary.html"
  },
  {
    "to": "pages/glossary.html",
    "title": "Blind Ship",
    "crumb": "Glossary",
    "meta": "Shipment where retailer branding is used but CN fulfills. Common in dropship.",
    "keywords": "Blind Ship Shipment where retailer branding is used but CN fulfills. Common in dropship.",
    "toPages": "glossary.html"
  },
  {
    "to": "pages/glossary.html",
    "title": "FIFO",
    "crumb": "Glossary",
    "meta": "First In, First Out. Allocation strategy shipping oldest inventory first.",
    "keywords": "FIFO First In, First Out. Allocation strategy shipping oldest inventory first.",
    "toPages": "glossary.html"
  },
  {
    "to": "pages/glossary.html",
    "title": "FEFO",
    "crumb": "Glossary",
    "meta": "First Expired, First Out. Allocation strategy for products with expiry dates.",
    "keywords": "FEFO First Expired, First Out. Allocation strategy for products with expiry dates.",
    "toPages": "glossary.html"
  },
  {
    "to": "pages/glossary.html",
    "title": "Safety Stock",
    "crumb": "Glossary",
    "meta": "Buffer quantity withheld from channel ATS to prevent overselling during sync lag…",
    "keywords": "Safety Stock Buffer quantity withheld from channel ATS to prevent overselling during sync lag.",
    "toPages": "glossary.html"
  },
  {
    "to": "pages/glossary.html",
    "title": "Multi-Client",
    "crumb": "Glossary",
    "meta": "Logiwa capability to segregate inventory and operations by client/brand in one w…",
    "keywords": "Multi-Client Logiwa capability to segregate inventory and operations by client/brand in one warehouse.",
    "toPages": "glossary.html"
  },
  {
    "to": "pages/critical-screens.html",
    "title": "TechOMS: Sales Orders List",
    "crumb": "Critical Screens",
    "meta": "Sales → Sales Orders",
    "keywords": "Search and view all orders across channels. Primary starting point for order issues. Customer inquiry, missing order, status check, hold investigation. Channel order ID, status, hold reason, fulfillment channel, ship-by date. TechOMS",
    "toPages": "critical-screens.html"
  },
  {
    "to": "pages/critical-screens.html",
    "title": "TechOMS: Sales Order Detail",
    "crumb": "Critical Screens",
    "meta": "Sales → Sales Orders → [order]",
    "keywords": "Full order view: lines, addresses, status history, allocations, external references. Any order troubleshooting — trace status changes and references. External/channel ID, Logiwa reference, tracking, hold reason, order history. TechOMS",
    "toPages": "critical-screens.html"
  },
  {
    "to": "pages/critical-screens.html",
    "title": "TechOMS: Sales Channels",
    "crumb": "Critical Screens",
    "meta": "Settings → Sales Channels",
    "keywords": "Configure and monitor Shopify, Rithum, and other demand source connectors. Import failures, credential issues, connector status checks. Connector status, last sync, API credentials, channel mapping. TechOMS",
    "toPages": "critical-screens.html"
  },
  {
    "to": "pages/critical-screens.html",
    "title": "TechOMS: Fulfillment Channels",
    "crumb": "Critical Screens",
    "meta": "Settings → Fulfillment Channels",
    "keywords": "Configure Logiwa WMS connection for order export and ship confirm. Export failures, ship confirm not received, warehouse mapping issues. Warehouse mapping, client ID, export job schedule, last run status. TechOMS",
    "toPages": "critical-screens.html"
  },
  {
    "to": "pages/critical-screens.html",
    "title": "TechOMS: Recurring Jobs / Job Logs",
    "crumb": "Critical Screens",
    "meta": "Admin → Jobs / IntegratedFlow Logs",
    "keywords": "View scheduled import, export, and sync job execution history. Any sync failure — first place to check for error messages. Job name, last run, success/fail, error message, records processed. TechOMS",
    "toPages": "critical-screens.html"
  },
  {
    "to": "pages/critical-screens.html",
    "title": "TechOMS: Inventory / ATS View",
    "crumb": "Critical Screens",
    "meta": "Inventory → Product Inventory",
    "keywords": "View available-to-sell by SKU and warehouse. Compare against Logiwa. Oversell investigation, ATS mismatch, post-receipt verification. SKU, warehouse, on-hand, ATS, reserved qty, last sync time. TechOMS",
    "toPages": "critical-screens.html"
  },
  {
    "to": "pages/critical-screens.html",
    "title": "TechOMS: Order Rules",
    "crumb": "Critical Screens",
    "meta": "Settings → Order Rules",
    "keywords": "Business rules for holds, routing, splits, and carrier selection. Wrong warehouse, unexpected hold, routing disputes. Rule name, conditions, actions, priority, active status. TechOMS",
    "toPages": "critical-screens.html"
  },
  {
    "to": "pages/critical-screens.html",
    "title": "TechOMS: Purchase Orders",
    "crumb": "Critical Screens",
    "meta": "Purchasing → Purchase Orders",
    "keywords": "Inbound PO management and export status to Logiwa. PO not in warehouse, receiving issues, inbound planning. PO number, vendor, status, received qty, export status. TechOMS",
    "toPages": "critical-screens.html"
  },
  {
    "to": "pages/critical-screens.html",
    "title": "TechOMS: RMA / Returns",
    "crumb": "Critical Screens",
    "meta": "Returns → RMA List",
    "keywords": "Return authorization, inspection status, refund tracking. Return inquiries, refund delays, unauthorized returns. RMA number, linked order, status, disposition, refund amount. TechOMS",
    "toPages": "critical-screens.html"
  },
  {
    "to": "pages/critical-screens.html",
    "title": "TechOMS: Product Master / SKU Mapping",
    "crumb": "Critical Screens",
    "meta": "Products → Product Catalog",
    "keywords": "SKU definitions, aliases, and channel cross-references. SKU mapping failures on import, catalog mismatches. SKU, UPC, channel aliases, active status, client. TechOMS",
    "toPages": "critical-screens.html"
  },
  {
    "to": "pages/critical-screens.html",
    "title": "Logiwa: Shipment Orders",
    "crumb": "Critical Screens",
    "meta": "Fulfillment → Shipment Orders",
    "keywords": "All outbound orders in the warehouse. Status from open to shipped. Order not shipping, allocation failure, tracking lookup. Reference number, status, client, carrier, tracking, ship date. Logiwa",
    "toPages": "critical-screens.html"
  },
  {
    "to": "pages/critical-screens.html",
    "title": "Logiwa: Shipment Order Detail",
    "crumb": "Critical Screens",
    "meta": "Fulfillment → Shipment Orders → [order]",
    "keywords": "Lines, allocation, pick/pack/ship history, tracking per carton. Detailed fulfillment troubleshooting, partial ship, label issues. Lines, allocated locations, tracking, weight, status timeline. Logiwa",
    "toPages": "critical-screens.html"
  },
  {
    "to": "pages/critical-screens.html",
    "title": "Logiwa: Inventory by Location",
    "crumb": "Critical Screens",
    "meta": "Inventory → Inventory Management",
    "keywords": "On-hand and available qty by SKU and location. Allocation failure, inventory discrepancy, cycle count follow-up. SKU, location, on-hand, available, allocated, location type. Logiwa",
    "toPages": "critical-screens.html"
  },
  {
    "to": "pages/critical-screens.html",
    "title": "Logiwa: Expected Receipts (Inbound)",
    "crumb": "Critical Screens",
    "meta": "Inbound → Expected Receipts",
    "keywords": "Open POs and inbound shipments awaiting receiving. PO not found at dock, receiving planning, inbound delays. PO reference, vendor, expected date, lines, status. Logiwa",
    "toPages": "critical-screens.html"
  },
  {
    "to": "pages/critical-screens.html",
    "title": "Logiwa: Receiving",
    "crumb": "Critical Screens",
    "meta": "Inbound → Receiving",
    "keywords": "Active receiving sessions for PO and return receipts. Receiving issues, discrepancy documentation, scan failures. Receipt lines, received qty, discrepancy, user, timestamp. Logiwa",
    "toPages": "critical-screens.html"
  },
  {
    "to": "pages/critical-screens.html",
    "title": "Logiwa: Expected Returns",
    "crumb": "Critical Screens",
    "meta": "Inbound → Expected Returns",
    "keywords": "Authorized RMAs expected at the returns dock. Return not matching, unauthorized return, RMA export verification. RMA number, lines, status, linked order reference. Logiwa",
    "toPages": "critical-screens.html"
  },
  {
    "to": "pages/critical-screens.html",
    "title": "Logiwa: Allocation View",
    "crumb": "Critical Screens",
    "meta": "Fulfillment → Allocation / Shipment Order Allocations",
    "keywords": "See which inventory is reserved for which orders. Cannot allocate, negative available, stale allocation investigation. Order, SKU, location, allocated qty, allocation date. Logiwa",
    "toPages": "critical-screens.html"
  },
  {
    "to": "pages/critical-screens.html",
    "title": "Logiwa: Inventory Adjustments",
    "crumb": "Critical Screens",
    "meta": "Inventory → Adjustments",
    "keywords": "Manual inventory corrections with reason codes. Post-cycle-count corrections, damage write-offs, receiving fixes. SKU, location, adjustment qty, reason, user, approval. Logiwa",
    "toPages": "critical-screens.html"
  },
  {
    "to": "pages/critical-screens.html",
    "title": "Logiwa: Cycle Count Tasks",
    "crumb": "Critical Screens",
    "meta": "Inventory → Cycle Count",
    "keywords": "Scheduled and active count tasks with variance results. Inventory accuracy issues, scheduled count follow-up. Location, SKU, expected vs counted, variance, status. Logiwa",
    "toPages": "critical-screens.html"
  },
  {
    "to": "pages/critical-screens.html",
    "title": "Logiwa: Product Catalog",
    "crumb": "Critical Screens",
    "meta": "Settings → Products",
    "keywords": "SKU master per client with barcodes and attributes. SKU scan failure, export rejection, new product setup. Product code, UPC, client, active, weight/dims. Logiwa",
    "toPages": "critical-screens.html"
  },
  {
    "to": "pages/critical-screens.html",
    "title": "Logiwa: Carrier Configuration",
    "crumb": "Critical Screens",
    "meta": "Settings → Carriers / Shipping",
    "keywords": "Carrier accounts, service mappings, and label settings. Label generation failure, wrong carrier, rate shop errors. Carrier name, account number, services, active status. Logiwa",
    "toPages": "critical-screens.html"
  },
  {
    "to": "pages/critical-screens.html",
    "title": "Rithum: Orders / PO List",
    "crumb": "Critical Screens",
    "meta": "Orders → Order Management",
    "keywords": "All retailer POs with status, ship-by, and compliance indicators. Retailer order lookup, missing PO in TechOMS, SLA monitoring. Retailer PO, status, ship-by, cancel-by, trading partner. Rithum",
    "toPages": "critical-screens.html"
  },
  {
    "to": "pages/critical-screens.html",
    "title": "Rithum: Order Detail",
    "crumb": "Critical Screens",
    "meta": "Orders → [PO detail]",
    "keywords": "Line items, ship-to, routing requirements, status history. Routing guide compliance, line-level disputes, ASN verification. Lines, ship-to, routing, label requirements, status events. Rithum",
    "toPages": "critical-screens.html"
  },
  {
    "to": "pages/critical-screens.html",
    "title": "Rithum: ASN / Ship Confirmations",
    "crumb": "Critical Screens",
    "meta": "Documents → ASN / Ship Notices",
    "keywords": "Outbound 856 documents and transmission status. Missing or rejected ASN, retailer compliance issues. PO reference, transmission status, SSCC, tracking, timestamp. Rithum",
    "toPages": "critical-screens.html"
  },
  {
    "to": "pages/critical-screens.html",
    "title": "Rithum: Inventory Feeds (846)",
    "crumb": "Critical Screens",
    "meta": "Inventory → Feeds / 846",
    "keywords": "Outbound inventory advice documents and rejection log. 846 rejection, oversell risk, inventory feed failures. SKU, qty sent, transmission status, rejection reason. Rithum",
    "toPages": "critical-screens.html"
  },
  {
    "to": "pages/critical-screens.html",
    "title": "Rithum: Trading Partners",
    "crumb": "Critical Screens",
    "meta": "Settings → Trading Partners",
    "keywords": "Retailer account configuration, EDI IDs, and SLA settings. New retailer onboarding, partner mapping issues, EDI errors. Partner ID, EDI qualifier, document types, active status. Rithum",
    "toPages": "critical-screens.html"
  },
  {
    "to": "pages/critical-screens.html",
    "title": "Rithum: EDI Transaction Log",
    "crumb": "Critical Screens",
    "meta": "EDI → Transaction History",
    "keywords": "All inbound/outbound EDI documents with status and errors. EDI translation errors, document rejection, audit trail. Doc type (850/855/856/846), status, error message, timestamp. Rithum",
    "toPages": "critical-screens.html"
  },
  {
    "to": "pages/critical-screens.html",
    "title": "Rithum: Returns Portal",
    "crumb": "Critical Screens",
    "meta": "Returns → Return Authorizations",
    "keywords": "Retailer-initiated returns and authorization status. Retail return inquiries, RMA sync issues. Return ID, PO reference, status, items, authorization date. Rithum",
    "toPages": "critical-screens.html"
  },
  {
    "to": "pages/critical-screens.html",
    "title": "Rithum: SKU / Product Mapping",
    "crumb": "Critical Screens",
    "meta": "Catalog → Product Mapping",
    "keywords": "Retailer SKU to vendor SKU cross-reference for EDI. SKU mapping failures, 846 rejections, catalog updates. Retailer SKU, vendor SKU, UPC, active status. Rithum",
    "toPages": "critical-screens.html"
  },
  {
    "to": "pages/onboarding.html",
    "title": "Week 1: Foundations — Learn the Stack",
    "crumb": "Onboarding",
    "meta": "Understand what each system does and does not do",
    "keywords": "Understand what each system does and does not do Navigate critical screens in TechOMS, Logiwa, and Rithum Trace a sample DTC order end-to-end on paper Read System Architecture and Sales Order Flow sections in this handbook Complete access checklist (below) with your manager Shadow a senior analyst on 3 live support tickets Draw the order flow from memory — review with mentor Complete glossary quiz (self-test: define OMS, WMS, ATS, ASN, 850, 856)",
    "toPages": "onboarding.html"
  },
  {
    "to": "pages/onboarding.html",
    "title": "Week 2: Hands-On — First-Level Troubleshooting",
    "crumb": "Onboarding",
    "meta": "Perform independent order lookup across all systems",
    "keywords": "Perform independent order lookup across all systems Use the troubleshooting matrix for triage Handle simple import/sync failures with runbook Resolve 5 supervised tickets using the Sales Order debugging steps Run daily monitoring routine (below) with mentor review Practice global search (Ctrl+K) to find process docs quickly Document one incident with screenshots from each system Review Purchase Order and Returns flows",
    "toPages": "onboarding.html"
  },
  {
    "to": "pages/onboarding.html",
    "title": "Week 3: Depth — Inventory & Integration",
    "crumb": "Onboarding",
    "meta": "Diagnose inventory mismatches using the 9-step methodology",
    "keywords": "Diagnose inventory mismatches using the 9-step methodology Understand EDI document flow and retailer SLAs Configure-aware: know where sync jobs live Complete one inventory reconciliation exercise (supervised) Review Integration Guide for all five links Identify sync schedules and locate job logs in each system Handle 3 tickets independently; mentor reviews before close Read retailer profile docs for top 3 clients",
    "toPages": "onboarding.html"
  },
  {
    "to": "pages/onboarding.html",
    "title": "Week 4: Independence — Full Ownership",
    "crumb": "Onboarding",
    "meta": "Own daily monitoring routine independently",
    "keywords": "Own daily monitoring routine independently Escalate correctly per escalation paths Contribute one documentation improvement Run daily health check and report findings Close 10 tickets independently across order, inventory, and return categories Present one root-cause analysis to the team (5-min share) Add one entry to troubleshooting matrix or update a screenshot list 30-day check-in with manager: gaps and next learning goals",
    "toPages": "onboarding.html"
  },
  {
    "to": "pages/onboarding.html",
    "title": "Daily: Order import health",
    "crumb": "Onboarding",
    "meta": "15 min",
    "keywords": "Check TechOMS import jobs (Shopify + Rithum) — any failures in last 24h? Orders on hold > 4h?",
    "toPages": "onboarding.html"
  },
  {
    "to": "pages/onboarding.html",
    "title": "Daily: Export to warehouse",
    "crumb": "Onboarding",
    "meta": "10 min",
    "keywords": "TechOMS → Logiwa export job success rate. Any released-but-not-exported orders?",
    "toPages": "onboarding.html"
  },
  {
    "to": "pages/onboarding.html",
    "title": "Daily: Ship confirm backlog",
    "crumb": "Onboarding",
    "meta": "10 min",
    "keywords": "Compare Logiwa shipped today vs TechOMS confirmed. Any > 1h gap?",
    "toPages": "onboarding.html"
  },
  {
    "to": "pages/onboarding.html",
    "title": "Daily: Inventory sync",
    "crumb": "Onboarding",
    "meta": "15 min",
    "keywords": "Verify inventory job ran within expected interval. Spot-check 5 A SKUs: Logiwa on-hand vs TechOMS ATS.",
    "toPages": "onboarding.html"
  },
  {
    "to": "pages/onboarding.html",
    "title": "Daily: Retailer compliance",
    "crumb": "Onboarding",
    "meta": "10 min",
    "keywords": "Any late 855/856? Any 846 rejections? Orders approaching ship-by deadline not yet allocated?",
    "toPages": "onboarding.html"
  },
  {
    "to": "pages/onboarding.html",
    "title": "Daily: Returns queue",
    "crumb": "Onboarding",
    "meta": "5 min",
    "keywords": "Authorized RMAs without receipt > 7 days. Received but not inspected > 48h.",
    "toPages": "onboarding.html"
  },
  {
    "to": "pages/onboarding.html",
    "title": "Daily: Ticket review",
    "crumb": "Onboarding",
    "meta": "10 min",
    "keywords": "Open P1/P2 tickets — any aging > SLA? Assign or escalate.",
    "toPages": "onboarding.html"
  },
  {
    "to": "pages/integration.html#edi-flow",
    "title": "EDI 850 — Purchase Order",
    "crumb": "Integration Guide",
    "meta": "Inbound",
    "keywords": "850 Purchase Order Retailer order to supplier/CN. Creates sales order in TechOMS. EDI",
    "toPages": "integration.html#edi-flow"
  },
  {
    "to": "pages/integration.html#edi-flow",
    "title": "EDI 855 — PO Acknowledgment",
    "crumb": "Integration Guide",
    "meta": "Outbound",
    "keywords": "855 PO Acknowledgment Accept, reject, or change PO lines. Must meet cancel-by SLA. EDI",
    "toPages": "integration.html#edi-flow"
  },
  {
    "to": "pages/integration.html#edi-flow",
    "title": "EDI 856 — Ship Notice / ASN",
    "crumb": "Integration Guide",
    "meta": "Outbound",
    "keywords": "856 Ship Notice / ASN Advance ship notice with tracking, carton SSCC, qty per line. EDI",
    "toPages": "integration.html#edi-flow"
  },
  {
    "to": "pages/integration.html#edi-flow",
    "title": "EDI 810 — Invoice",
    "crumb": "Integration Guide",
    "meta": "Outbound",
    "keywords": "810 Invoice Bill retailer for shipped merchandise per trading agreement. EDI",
    "toPages": "integration.html#edi-flow"
  },
  {
    "to": "pages/integration.html#edi-flow",
    "title": "EDI 846 — Inventory Advice",
    "crumb": "Integration Guide",
    "meta": "Outbound",
    "keywords": "846 Inventory Advice Periodic available inventory feed to prevent overselling on retailer sites. EDI",
    "toPages": "integration.html#edi-flow"
  },
  {
    "to": "pages/integration.html#edi-flow",
    "title": "EDI 870 — Order Status",
    "crumb": "Integration Guide",
    "meta": "Both",
    "keywords": "870 Order Status Status updates and cancellation requests/responses. EDI",
    "toPages": "integration.html#edi-flow"
  },
  {
    "to": "pages/integration.html#edi-flow",
    "title": "EDI 940 — Warehouse Shipping Order",
    "crumb": "Integration Guide",
    "meta": "Outbound",
    "keywords": "940 Warehouse Shipping Order Optional: OMS instructs WMS to fulfill (may be replaced by API). EDI",
    "toPages": "integration.html#edi-flow"
  },
  {
    "to": "pages/integration.html#edi-flow",
    "title": "EDI 945 — Warehouse Shipping Advice",
    "crumb": "Integration Guide",
    "meta": "Inbound",
    "keywords": "945 Warehouse Shipping Advice Optional: WMS confirms shipment back to OMS (may be replaced by API). EDI",
    "toPages": "integration.html#edi-flow"
  }
];
