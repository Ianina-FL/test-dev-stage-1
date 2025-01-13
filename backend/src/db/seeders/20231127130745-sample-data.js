const db = require('../models');
const Users = db.users;

const HumanResources = db.human_resources;

const Inventory = db.inventory;

const Machinery = db.machinery;

const QualityControl = db.quality_control;

const RawMaterials = db.raw_materials;

const Suppliers = db.suppliers;

const WorkOrders = db.work_orders;

const Organizations = db.organizations;

const HumanResourcesData = [
  {
    employee_name: 'Franz Boas',

    // type code here for "relation_one" field

    shift: 'J. Robert Oppenheimer',

    payroll: 11.06,

    // type code here for "relation_one" field
  },

  {
    employee_name: 'J. Robert Oppenheimer',

    // type code here for "relation_one" field

    shift: 'Joseph J. Thomson',

    payroll: 36.29,

    // type code here for "relation_one" field
  },

  {
    employee_name: 'Anton van Leeuwenhoek',

    // type code here for "relation_one" field

    shift: 'Emil Kraepelin',

    payroll: 63.96,

    // type code here for "relation_one" field
  },

  {
    employee_name: 'Paul Ehrlich',

    // type code here for "relation_one" field

    shift: 'Anton van Leeuwenhoek',

    payroll: 51.16,

    // type code here for "relation_one" field
  },

  {
    employee_name: 'Sigmund Freud',

    // type code here for "relation_one" field

    shift: 'Comte de Buffon',

    payroll: 34.21,

    // type code here for "relation_one" field
  },
];

const InventoryData = [
  {
    product_name: 'Stephen Hawking',

    available_quantity: 25.44,

    reserved_quantity: 39.74,

    returned_quantity: 92.72,

    // type code here for "relation_one" field
  },

  {
    product_name: 'Max von Laue',

    available_quantity: 13.68,

    reserved_quantity: 69.09,

    returned_quantity: 69.23,

    // type code here for "relation_one" field
  },

  {
    product_name: 'Erwin Schrodinger',

    available_quantity: 73.45,

    reserved_quantity: 13.87,

    returned_quantity: 38.02,

    // type code here for "relation_one" field
  },

  {
    product_name: 'Pierre Simon de Laplace',

    available_quantity: 27.29,

    reserved_quantity: 86.57,

    returned_quantity: 50.77,

    // type code here for "relation_one" field
  },

  {
    product_name: 'Francis Galton',

    available_quantity: 92.47,

    reserved_quantity: 27.21,

    returned_quantity: 70.63,

    // type code here for "relation_one" field
  },
];

const MachineryData = [
  {
    name: 'Antoine Laurent Lavoisier',

    maintenance_schedule: new Date(),

    downtime: 6,

    // type code here for "relation_one" field
  },

  {
    name: 'Francis Galton',

    maintenance_schedule: new Date(),

    downtime: 9,

    // type code here for "relation_one" field
  },

  {
    name: 'Archimedes',

    maintenance_schedule: new Date(),

    downtime: 3,

    // type code here for "relation_one" field
  },

  {
    name: 'Ludwig Boltzmann',

    maintenance_schedule: new Date(),

    downtime: 9,

    // type code here for "relation_one" field
  },

  {
    name: 'Albert Einstein',

    maintenance_schedule: new Date(),

    downtime: 3,

    // type code here for "relation_one" field
  },
];

const QualityControlData = [
  {
    check_point: 'Frederick Gowland Hopkins',

    // type code here for "relation_one" field

    passed: false,

    // type code here for "relation_one" field
  },

  {
    check_point: 'Trofim Lysenko',

    // type code here for "relation_one" field

    passed: false,

    // type code here for "relation_one" field
  },

  {
    check_point: 'Ernst Haeckel',

    // type code here for "relation_one" field

    passed: false,

    // type code here for "relation_one" field
  },

  {
    check_point: 'Claude Levi-Strauss',

    // type code here for "relation_one" field

    passed: true,

    // type code here for "relation_one" field
  },

  {
    check_point: 'Jean Piaget',

    // type code here for "relation_one" field

    passed: false,

    // type code here for "relation_one" field
  },
];

const RawMaterialsData = [
  {
    name: 'Edward Teller',

    quantity: 94.98,

    reorder_level: 89.91,

    // type code here for "relation_one" field
  },

  {
    name: 'Frederick Gowland Hopkins',

    quantity: 65.17,

    reorder_level: 10.75,

    // type code here for "relation_one" field
  },

  {
    name: 'Isaac Newton',

    quantity: 97.18,

    reorder_level: 59.72,

    // type code here for "relation_one" field
  },

  {
    name: 'James Watson',

    quantity: 92.32,

    reorder_level: 70.35,

    // type code here for "relation_one" field
  },

  {
    name: 'Trofim Lysenko',

    quantity: 51.13,

    reorder_level: 78.83,

    // type code here for "relation_one" field
  },
];

const SuppliersData = [
  {
    name: 'J. Robert Oppenheimer',

    contract_terms: 'Carl Gauss (Karl Friedrich Gauss)',

    delivery_schedule: new Date(),

    payment_records: 63.16,

    // type code here for "relation_one" field
  },

  {
    name: 'Frederick Sanger',

    contract_terms: 'Robert Koch',

    delivery_schedule: new Date(),

    payment_records: 47.69,

    // type code here for "relation_one" field
  },

  {
    name: 'Charles Sherrington',

    contract_terms: 'John von Neumann',

    delivery_schedule: new Date(),

    payment_records: 43.62,

    // type code here for "relation_one" field
  },

  {
    name: 'Enrico Fermi',

    contract_terms: 'Theodosius Dobzhansky',

    delivery_schedule: new Date(),

    payment_records: 98.77,

    // type code here for "relation_one" field
  },

  {
    name: 'Archimedes',

    contract_terms: 'Joseph J. Thomson',

    delivery_schedule: new Date(),

    payment_records: 45.52,

    // type code here for "relation_one" field
  },
];

const WorkOrdersData = [
  {
    order_number: 'Galileo Galilei',

    // type code here for "relation_many" field

    // type code here for "relation_many" field

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },

  {
    order_number: 'Ernst Mayr',

    // type code here for "relation_many" field

    // type code here for "relation_many" field

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },

  {
    order_number: 'Christiaan Huygens',

    // type code here for "relation_many" field

    // type code here for "relation_many" field

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },

  {
    order_number: 'William Bayliss',

    // type code here for "relation_many" field

    // type code here for "relation_many" field

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },

  {
    order_number: 'Christiaan Huygens',

    // type code here for "relation_many" field

    // type code here for "relation_many" field

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },
];

const OrganizationsData = [
  {
    name: 'John Bardeen',
  },

  {
    name: 'Nicolaus Copernicus',
  },

  {
    name: 'Franz Boas',
  },

  {
    name: 'Louis Victor de Broglie',
  },

  {
    name: 'Charles Lyell',
  },
];

// Similar logic for "relation_many"

async function associateUserWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const User0 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (User0?.setOrganization) {
    await User0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const User1 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (User1?.setOrganization) {
    await User1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const User2 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (User2?.setOrganization) {
    await User2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const User3 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (User3?.setOrganization) {
    await User3.setOrganization(relatedOrganization3);
  }

  const relatedOrganization4 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const User4 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (User4?.setOrganization) {
    await User4.setOrganization(relatedOrganization4);
  }
}

async function associateHumanResourceWithRole() {
  const relatedRole0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const HumanResource0 = await HumanResources.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (HumanResource0?.setRole) {
    await HumanResource0.setRole(relatedRole0);
  }

  const relatedRole1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const HumanResource1 = await HumanResources.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (HumanResource1?.setRole) {
    await HumanResource1.setRole(relatedRole1);
  }

  const relatedRole2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const HumanResource2 = await HumanResources.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (HumanResource2?.setRole) {
    await HumanResource2.setRole(relatedRole2);
  }

  const relatedRole3 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const HumanResource3 = await HumanResources.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (HumanResource3?.setRole) {
    await HumanResource3.setRole(relatedRole3);
  }

  const relatedRole4 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const HumanResource4 = await HumanResources.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (HumanResource4?.setRole) {
    await HumanResource4.setRole(relatedRole4);
  }
}

async function associateHumanResourceWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const HumanResource0 = await HumanResources.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (HumanResource0?.setOrganization) {
    await HumanResource0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const HumanResource1 = await HumanResources.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (HumanResource1?.setOrganization) {
    await HumanResource1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const HumanResource2 = await HumanResources.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (HumanResource2?.setOrganization) {
    await HumanResource2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const HumanResource3 = await HumanResources.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (HumanResource3?.setOrganization) {
    await HumanResource3.setOrganization(relatedOrganization3);
  }

  const relatedOrganization4 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const HumanResource4 = await HumanResources.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (HumanResource4?.setOrganization) {
    await HumanResource4.setOrganization(relatedOrganization4);
  }
}

async function associateInventoryWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Inventory0 = await Inventory.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Inventory0?.setOrganization) {
    await Inventory0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Inventory1 = await Inventory.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Inventory1?.setOrganization) {
    await Inventory1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Inventory2 = await Inventory.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Inventory2?.setOrganization) {
    await Inventory2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Inventory3 = await Inventory.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Inventory3?.setOrganization) {
    await Inventory3.setOrganization(relatedOrganization3);
  }

  const relatedOrganization4 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Inventory4 = await Inventory.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Inventory4?.setOrganization) {
    await Inventory4.setOrganization(relatedOrganization4);
  }
}

async function associateMachineryWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Machinery0 = await Machinery.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Machinery0?.setOrganization) {
    await Machinery0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Machinery1 = await Machinery.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Machinery1?.setOrganization) {
    await Machinery1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Machinery2 = await Machinery.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Machinery2?.setOrganization) {
    await Machinery2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Machinery3 = await Machinery.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Machinery3?.setOrganization) {
    await Machinery3.setOrganization(relatedOrganization3);
  }

  const relatedOrganization4 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Machinery4 = await Machinery.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Machinery4?.setOrganization) {
    await Machinery4.setOrganization(relatedOrganization4);
  }
}

async function associateQualityControlWithWork_order() {
  const relatedWork_order0 = await WorkOrders.findOne({
    offset: Math.floor(Math.random() * (await WorkOrders.count())),
  });
  const QualityControl0 = await QualityControl.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (QualityControl0?.setWork_order) {
    await QualityControl0.setWork_order(relatedWork_order0);
  }

  const relatedWork_order1 = await WorkOrders.findOne({
    offset: Math.floor(Math.random() * (await WorkOrders.count())),
  });
  const QualityControl1 = await QualityControl.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (QualityControl1?.setWork_order) {
    await QualityControl1.setWork_order(relatedWork_order1);
  }

  const relatedWork_order2 = await WorkOrders.findOne({
    offset: Math.floor(Math.random() * (await WorkOrders.count())),
  });
  const QualityControl2 = await QualityControl.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (QualityControl2?.setWork_order) {
    await QualityControl2.setWork_order(relatedWork_order2);
  }

  const relatedWork_order3 = await WorkOrders.findOne({
    offset: Math.floor(Math.random() * (await WorkOrders.count())),
  });
  const QualityControl3 = await QualityControl.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (QualityControl3?.setWork_order) {
    await QualityControl3.setWork_order(relatedWork_order3);
  }

  const relatedWork_order4 = await WorkOrders.findOne({
    offset: Math.floor(Math.random() * (await WorkOrders.count())),
  });
  const QualityControl4 = await QualityControl.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (QualityControl4?.setWork_order) {
    await QualityControl4.setWork_order(relatedWork_order4);
  }
}

async function associateQualityControlWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const QualityControl0 = await QualityControl.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (QualityControl0?.setOrganization) {
    await QualityControl0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const QualityControl1 = await QualityControl.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (QualityControl1?.setOrganization) {
    await QualityControl1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const QualityControl2 = await QualityControl.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (QualityControl2?.setOrganization) {
    await QualityControl2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const QualityControl3 = await QualityControl.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (QualityControl3?.setOrganization) {
    await QualityControl3.setOrganization(relatedOrganization3);
  }

  const relatedOrganization4 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const QualityControl4 = await QualityControl.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (QualityControl4?.setOrganization) {
    await QualityControl4.setOrganization(relatedOrganization4);
  }
}

async function associateRawMaterialWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const RawMaterial0 = await RawMaterials.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (RawMaterial0?.setOrganization) {
    await RawMaterial0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const RawMaterial1 = await RawMaterials.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (RawMaterial1?.setOrganization) {
    await RawMaterial1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const RawMaterial2 = await RawMaterials.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (RawMaterial2?.setOrganization) {
    await RawMaterial2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const RawMaterial3 = await RawMaterials.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (RawMaterial3?.setOrganization) {
    await RawMaterial3.setOrganization(relatedOrganization3);
  }

  const relatedOrganization4 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const RawMaterial4 = await RawMaterials.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (RawMaterial4?.setOrganization) {
    await RawMaterial4.setOrganization(relatedOrganization4);
  }
}

async function associateSupplierWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Supplier0 = await Suppliers.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Supplier0?.setOrganization) {
    await Supplier0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Supplier1 = await Suppliers.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Supplier1?.setOrganization) {
    await Supplier1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Supplier2 = await Suppliers.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Supplier2?.setOrganization) {
    await Supplier2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Supplier3 = await Suppliers.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Supplier3?.setOrganization) {
    await Supplier3.setOrganization(relatedOrganization3);
  }

  const relatedOrganization4 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Supplier4 = await Suppliers.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Supplier4?.setOrganization) {
    await Supplier4.setOrganization(relatedOrganization4);
  }
}

// Similar logic for "relation_many"

// Similar logic for "relation_many"

// Similar logic for "relation_many"

async function associateWorkOrderWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const WorkOrder0 = await WorkOrders.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (WorkOrder0?.setOrganization) {
    await WorkOrder0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const WorkOrder1 = await WorkOrders.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (WorkOrder1?.setOrganization) {
    await WorkOrder1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const WorkOrder2 = await WorkOrders.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (WorkOrder2?.setOrganization) {
    await WorkOrder2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const WorkOrder3 = await WorkOrders.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (WorkOrder3?.setOrganization) {
    await WorkOrder3.setOrganization(relatedOrganization3);
  }

  const relatedOrganization4 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const WorkOrder4 = await WorkOrders.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (WorkOrder4?.setOrganization) {
    await WorkOrder4.setOrganization(relatedOrganization4);
  }
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await HumanResources.bulkCreate(HumanResourcesData);

    await Inventory.bulkCreate(InventoryData);

    await Machinery.bulkCreate(MachineryData);

    await QualityControl.bulkCreate(QualityControlData);

    await RawMaterials.bulkCreate(RawMaterialsData);

    await Suppliers.bulkCreate(SuppliersData);

    await WorkOrders.bulkCreate(WorkOrdersData);

    await Organizations.bulkCreate(OrganizationsData);

    await Promise.all([
      // Similar logic for "relation_many"

      await associateUserWithOrganization(),

      await associateHumanResourceWithRole(),

      await associateHumanResourceWithOrganization(),

      await associateInventoryWithOrganization(),

      await associateMachineryWithOrganization(),

      await associateQualityControlWithWork_order(),

      await associateQualityControlWithOrganization(),

      await associateRawMaterialWithOrganization(),

      await associateSupplierWithOrganization(),

      // Similar logic for "relation_many"

      // Similar logic for "relation_many"

      // Similar logic for "relation_many"

      await associateWorkOrderWithOrganization(),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('human_resources', null, {});

    await queryInterface.bulkDelete('inventory', null, {});

    await queryInterface.bulkDelete('machinery', null, {});

    await queryInterface.bulkDelete('quality_control', null, {});

    await queryInterface.bulkDelete('raw_materials', null, {});

    await queryInterface.bulkDelete('suppliers', null, {});

    await queryInterface.bulkDelete('work_orders', null, {});

    await queryInterface.bulkDelete('organizations', null, {});
  },
};
