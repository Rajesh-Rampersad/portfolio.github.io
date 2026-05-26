import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'agroflow-saas',
    slug: 'agroflow-saas',
    title: {
      es: 'AgroFlow MVP & Enterprise SaaS',
      en: 'AgroFlow MVP & Enterprise SaaS',
      pt: 'AgroFlow MVP & Enterprise SaaS'
    },
    subtitle: {
      es: 'Arquitectura SaaS Multitenant de Alta Escalabilidad',
      en: 'High-Scalability Multi-tenant SaaS Architecture',
      pt: 'Arquitetura SaaS Multitenant de Alta Escalabilidade'
    },
    description: {
      es: 'Boilerplate empresarial y plataforma SaaS agrícola con aislamiento estricto de base de datos por cliente (Multi-tenancy), motor de búsqueda distribuido y suite de pruebas intensiva.',
      en: 'Enterprise boilerplate and agricultural SaaS platform with strict client database isolation (Multi-tenancy), distributed search engine, and intensive testing suite.',
      pt: 'Boilerplate empresarial e plataforma SaaS agrícola com isolamento estrito de banco de dados por cliente (Multi-tenancy), mecanismo de busca distribuído e suite de testes intensiva.'
    },
    longDescription: {
      es: 'AgroFlow representa la cúspide del diseño de sistemas modernos para el sector agrícola. Diseñado bajo principios de Clean Architecture (separación estricta de capas de Dominio, Aplicación e Infraestructura), este SaaS multi-inquilino garantiza el aislamiento de datos a nivel de base de datos física (Database-per-Tenant) mediante middleware dinámico en Laravel 11. Además, integra un motor de búsqueda ultra rápido con ElasticSearch 8 sincronizado en tiempo real mediante Eloquent Observers, permitiendo búsquedas complejas con latencias menores a 150ms sobre millones de registros.',
      en: 'AgroFlow represents the pinnacle of modern systems design for the agricultural sector. Engineered under Clean Architecture principles (strict separation of Domain, Application, and Infrastructure layers), this multi-tenant SaaS guarantees data isolation at the physical database level (Database-per-Tenant) using dynamic middleware in Laravel 11. Additionally, it integrates an ultra-fast search engine with ElasticSearch 8 synchronized in real-time through Eloquent Observers, enabling complex searches with latencies below 150ms over millions of records.',
      pt: 'O AgroFlow representa o ápice do design de sistemas modernos para o setor agrícola. Projetado sob os princípios de Clean Architecture (separação estrita das camadas de Domínio, Aplicação e Infraestrutura), este SaaS multi-inquilino garante o isolamento dos dados no nível do banco de dados físico (Database-per-Tenant) usando middleware dinâmico no Laravel 11. Além disso, integra um mecanismo de busca ultra-rápido com ElasticSearch 8 sincronizado em tempo real através de Eloquent Observers, permitindo buscas complexas com latências inferiores a 150ms em milhões de registros.'
    },
    category: 'saas',
    tags: ['Next-Gen SaaS', 'Multi-Tenancy', 'Search Engines', 'Clean Architecture'],
    technologies: ['Laravel 11', 'PostgreSQL', 'ElasticSearch 8', 'Pest v3', 'Docker', 'Redis'],
    metrics: [
      {
        label: {
          es: 'Aislamiento de Datos',
          en: 'Data Isolation',
          pt: 'Isolamento de Dados'
        },
        value: '100% Secure'
      },
      {
        label: {
          es: 'Tiempo de Búsqueda',
          en: 'Search Latency',
          pt: 'Tempo de Busca'
        },
        value: '<150ms'
      },
      {
        label: {
          es: 'Cobertura de Tests',
          en: 'Test Coverage',
          pt: 'Cobertura de Testes'
        },
        value: '94%'
      },
      {
        label: {
          es: 'Uptime del Core',
          en: 'Core Uptime',
          pt: 'Uptime do Core'
        },
        value: '99.99%'
      }
    ],
    architecture: {
      nodes: [
        {
          id: 'client',
          label: {
            es: 'Cliente Móvil / Web (React)',
            en: 'Mobile / Web Client (React)',
            pt: 'Cliente Móvel / Web (React)'
          },
          type: 'client'
        },
        {
          id: 'nginx',
          label: {
            es: 'NGINX Reverse Proxy',
            en: 'NGINX Reverse Proxy',
            pt: 'Proxy Reverso NGINX'
          },
          type: 'external'
        },
        {
          id: 'laravel',
          label: {
            es: 'Laravel 11 (API Core)',
            en: 'Laravel 11 (Core API)',
            pt: 'Laravel 11 (Core API)'
          },
          type: 'server'
        },
        {
          id: 'tenant_db',
          label: {
            es: 'PostgreSQL (Tenant DBs Aisladas)',
            en: 'PostgreSQL (Isolated Tenant DBs)',
            pt: 'PostgreSQL (DBs de Tenant Isoladas)'
          },
          type: 'database'
        },
        {
          id: 'redis',
          label: {
            es: 'Redis (Cache & Rate Limiting)',
            en: 'Redis (Cache & Rate Limiting)',
            pt: 'Redis (Cache e Limite de Taxa)'
          },
          type: 'database'
        },
        {
          id: 'elasticsearch',
          label: {
            es: 'ElasticSearch 8 (Sincronizado)',
            en: 'ElasticSearch 8 (Synchronized)',
            pt: 'ElasticSearch 8 (Sincronizado)'
          },
          type: 'database'
        }
      ],
      edges: [
        {
          from: 'client',
          to: 'nginx',
          label: {
            es: 'HTTPS / JSON',
            en: 'HTTPS / JSON',
            pt: 'HTTPS / JSON'
          }
        },
        {
          from: 'nginx',
          to: 'laravel',
          label: {
            es: 'FastCGI',
            en: 'FastCGI',
            pt: 'FastCGI'
          }
        },
        {
          from: 'laravel',
          to: 'redis',
          label: {
            es: 'Caché de Consultas',
            en: 'Query Cache',
            pt: 'Cache de Consultas'
          }
        },
        {
          from: 'laravel',
          to: 'tenant_db',
          label: {
            es: 'Conexión Dinámica',
            en: 'Dynamic Connection',
            pt: 'Conexão Dinâmica'
          }
        },
        {
          from: 'laravel',
          to: 'elasticsearch',
          label: {
            es: 'Eloquent Observers Async',
            en: 'Async Eloquent Observers',
            pt: 'Eloquent Observers Async'
          }
        }
      ]
    },
    featured: true,
    image: 'agroflow'
  },
  {
    id: 'api-market-erp',
    slug: 'api-market-erp',
    title: {
      es: 'API Market SaaS ERP',
      en: 'API Market SaaS ERP',
      pt: 'API Market SaaS ERP'
    },
    subtitle: {
      es: 'ERP Clínico y Comercial con Facturación Asíncrona',
      en: 'Clinical & Commercial ERP with Async Billing',
      pt: 'ERP Clínico e Comercial com Faturamento Assíncrono'
    },
    description: {
      es: 'Sistema de Planificación de Recursos (ERP) de nivel comercial y clínico, con aislamiento multi-nivel (Sucursales/Inventario), transacciones atómicas para POS y facturación fiscal asíncrona.',
      en: 'Commercial and clinical Resource Planning (ERP) system, featuring multi-level isolation (Branches/Inventory), atomic POS transactions, and asynchronous fiscal invoicing.',
      pt: 'Sistema de Planejamento de Recursos (ERP) de nível comercial e clínico, com isolamento multi-nível (Filiais/Estoque), transações POS atômicas e faturamento fiscal assíncrono.'
    },
    longDescription: {
      es: 'API Market es una plataforma ERP integral diseñada bajo el patrón de microservicios y colas asíncronas para resolver problemas complejos de concurrencia y cumplimiento fiscal. Integra un sistema de Punto de Venta (POS) tolerante a condiciones de carrera en inventario concurrente mediante bloqueos atómicos en PostgreSQL (`select_for_update`). Para el cumplimiento de facturación electrónica brasileña (NFS-e), implementa una arquitectura desacoplada utilizando Celery y Redis que gestiona de manera asíncrona la firma digital, validación y transmisión de facturas, evitando la latencia en las cajas de cobro.',
      en: 'API Market is a comprehensive ERP platform designed under the microservices pattern and asynchronous queues to solve complex concurrency and tax compliance issues. It integrates a Point of Sale (POS) system tolerant to race conditions in concurrent inventory through atomic locks in PostgreSQL (`select_for_update`). For compliance with Brazilian electronic service invoicing (NFS-e), it implements a decoupled architecture using Celery and Redis that asynchronously manages digital signature, validation, and transmission of invoices, preventing latency at checkout cashiers.',
      pt: 'O API Market é uma plataforma ERP abrangente projetada sob o padrão de microsserviços e filas assíncronas para resolver problemas complexos de concorrência e conformidade fiscal. Integra um sistema de Ponto de Venda (POS) tolerante a condições de corrida em estoque concorrente por meio de bloqueios atômicos no PostgreSQL (`select_for_update`). Para conformidade com o faturamento de serviços eletrônicos brasileiros (NFS-e), implementa uma arquitetura desacoplada usando Celery e Redis que gerencia de forma assíncrona a assinatura digital, validação e transmissão de faturas, evitando a latência nos caixas.'
    },
    category: 'system',
    tags: ['SaaS ERP', 'Asynchronous Queues', 'Atomic Transactions', 'Compliance'],
    technologies: ['Django', 'PostgreSQL', 'Docker', 'Celery', 'Redis', 'React'],
    metrics: [
      {
        label: {
          es: 'Facturas Emitidas',
          en: 'Invoices Issued',
          pt: 'Faturas Emitidas'
        },
        value: '+50,000'
      },
      {
        label: {
          es: 'Velocidad POS',
          en: 'POS Checkout Speed',
          pt: 'Velocidade POS'
        },
        value: '<200ms'
      },
      {
        label: {
          es: 'Tiempo de Cola Celery',
          en: 'Celery Queue Latency',
          pt: 'Tempo de Fila Celery'
        },
        value: 'Sub-second'
      },
      {
        label: {
          es: 'Aislamiento Sucursales',
          en: 'Branch Isolation',
          pt: 'Isolamento de Filiais'
        },
        value: 'Strict Logical'
      }
    ],
    architecture: {
      nodes: [
        {
          id: 'pos_client',
          label: {
            es: 'Cliente POS (React Web)',
            en: 'POS Client (React Web)',
            pt: 'Cliente POS (React Web)'
          },
          type: 'client'
        },
        {
          id: 'django_api',
          label: {
            es: 'Django REST API',
            en: 'Django REST API',
            pt: 'Django REST API'
          },
          type: 'server'
        },
        {
          id: 'db_pg',
          label: {
            es: 'PostgreSQL (Bloqueo Atómico)',
            en: 'PostgreSQL (Atomic Locked)',
            pt: 'PostgreSQL (Bloqueio Atômico)'
          },
          type: 'database'
        },
        {
          id: 'redis_broker',
          label: {
            es: 'Redis (Broker de Mensajes)',
            en: 'Redis (Message Broker)',
            pt: 'Redis (Message Broker)'
          },
          type: 'queue'
        },
        {
          id: 'celery_worker',
          label: {
            es: 'Workers Celery (Motor Fiscal)',
            en: 'Celery Workers (Fiscal Engine)',
            pt: 'Workers Celery (Motor Fiscal)'
          },
          type: 'server'
        },
        {
          id: 'sefaz_api',
          label: {
            es: 'API de Gobierno SEFAZ',
            en: 'SEFAZ Government API',
            pt: 'API de Governo SEFAZ'
          },
          type: 'external'
        }
      ],
      edges: [
        {
          from: 'pos_client',
          to: 'django_api',
          label: {
            es: 'REST API',
            en: 'REST API',
            pt: 'REST API'
          }
        },
        {
          from: 'django_api',
          to: 'db_pg',
          label: {
            es: 'select_for_update',
            en: 'select_for_update',
            pt: 'select_for_update'
          }
        },
        {
          from: 'django_api',
          to: 'redis_broker',
          label: {
            es: 'Disparar Factura',
            en: 'Trigger Invoice',
            pt: 'Disparar Fatura'
          }
        },
        {
          from: 'redis_broker',
          to: 'celery_worker',
          label: {
            es: 'Extracción de Tarea',
            en: 'Task Pull',
            pt: 'Puxar Tarefa'
          }
        },
        {
          from: 'celery_worker',
          to: 'sefaz_api',
          label: {
            es: 'Carga Útil Soap XML',
            en: 'Soap XML Payload',
            pt: 'Soap XML Payload'
          }
        }
      ]
    },
    featured: true,
    image: 'apimarket'
  },
  {
    id: 'tienda-virtual',
    slug: 'tienda-virtual',
    title: {
      es: 'Tienda E-Commerce Inteligente',
      en: 'Intelligent E-Commerce Store',
      pt: 'Loja E-Commerce Inteligente'
    },
    subtitle: {
      es: 'Plataforma de Ventas Optimizado para Conversión',
      en: 'Conversion-Optimized Sales Platform',
      pt: 'Plataforma de Vendas Otimizada para Conversão'
    },
    description: {
      es: 'Diseño y desarrollo de una tienda virtual moderna con un embudo de ventas optimizado, carrito de compras interactivo y gestión fluida de pedidos.',
      en: 'Design and development of a modern online store with an optimized sales funnel, interactive shopping cart, and smooth order management.',
      pt: 'Design e desenvolvimento de uma loja virtual moderna com funil de vendas otimizado, carrinho de compras interativo e gerenciamento de pedidos fluído.'
    },
    longDescription: {
      es: 'Desarrollo enfocado en resolver la fricción del usuario al comprar en línea. Esta tienda virtual integra un catálogo dinámico y responsivo, filtrado rápido de productos por categorías e interacción asíncrona para agregar artículos al carrito sin recargar la página. Cuenta con un flujo de checkout simplificado en un solo paso y redireccionamiento inteligente a WhatsApp y correo electrónico para cerrar ventas de inmediato con la información exacta del pedido.',
      en: 'Development focused on solving user friction when buying online. This virtual store integrates a dynamic and responsive catalog, quick product filtering by categories, and asynchronous interaction to add items to the cart without reloading the page. It features a simplified single-step checkout flow and smart redirecting to WhatsApp and email to close sales immediately with the exact order info.',
      pt: 'Desenvolvimento focado em resolver a fricção do usuário ao comprar online. Esta loja virtual integra um catálogo dinâmico e responsivo, filtragem rápida de produtos por categorias e interação assíncrona para adicionar itens ao carrinho sem recarregar a página. Possui fluxo de checkout simplificado em uma única etapa e redirecionamento inteligente para WhatsApp e e-mail para fechar vendas imediatamente com as informações exatas do pedido.'
    },
    category: 'web',
    tags: ['E-Commerce', 'Conversión UX', 'Responsive Design', 'Bootstrap/JS'],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'Bootstrap'],
    metrics: [
      {
        label: {
          es: 'Conversión de Carrito',
          en: 'Cart Conversion',
          pt: 'Conversão de Carrinho'
        },
        value: '+45%'
      },
      {
        label: {
          es: 'Tiempo de Carga',
          en: 'Loading Time',
          pt: 'Tempo de Carregamento'
        },
        value: '1.1s'
      },
      {
        label: {
          es: 'Responsividad Móvil',
          en: 'Mobile Responsiveness',
          pt: 'Responsividade Móvel'
        },
        value: '100%'
      }
    ],
    architecture: {
      nodes: [
        {
          id: 'user',
          label: {
            es: 'Comprador (Móvil/Web)',
            en: 'Buyer (Mobile/Web)',
            pt: 'Comprador (Móvel/Web)'
          },
          type: 'client'
        },
        {
          id: 'frontend',
          label: {
            es: 'Interfaz Bootstrap',
            en: 'Bootstrap Interface',
            pt: 'Interface Bootstrap'
          },
          type: 'client'
        },
        {
          id: 'php_backend',
          label: {
            es: 'Motor PHP',
            en: 'PHP Engine',
            pt: 'Motor PHP'
          },
          type: 'server'
        },
        {
          id: 'mysql_db',
          label: {
            es: 'Base de Datos MySQL',
            en: 'MySQL Database',
            pt: 'Banco de Dados MySQL'
          },
          type: 'database'
        }
      ],
      edges: [
        {
          from: 'user',
          to: 'frontend',
          label: {
            es: 'Interacción',
            en: 'Interaction',
            pt: 'Interação'
          }
        },
        {
          from: 'frontend',
          to: 'php_backend',
          label: {
            es: 'AJAX / POST',
            en: 'AJAX / POST',
            pt: 'AJAX / POST'
          }
        },
        {
          from: 'php_backend',
          to: 'mysql_db',
          label: {
            es: 'Consultas SQL',
            en: 'SQL Queries',
            pt: 'Consultas SQL'
          }
        }
      ]
    },
    featured: false,
    image: 'tienda_virtual'
  },
  {
    id: 'sistem-pos',
    slug: 'sistem-pos',
    title: {
      es: 'Sistema de Inventario POS',
      en: 'POS Inventory System',
      pt: 'Sistema de Estoque POS'
    },
    subtitle: {
      es: 'Administración y Control de Ventas en Vivo',
      en: 'Live Sales Management & Control',
      pt: 'Administração e Controle de Vendas Ao Vivo'
    },
    description: {
      es: 'Aplicación web para gestión de existencias de almacén, facturación rápida en caja y reportes financieros integrados.',
      en: 'Web application for warehouse stock management, quick cashier billing, and integrated financial reports.',
      pt: 'Aplicativo web para gestão de estoque, faturamento rápido de caixa e relatórios financeiros integrados.'
    },
    longDescription: {
      es: 'Un panel robusto diseñado para pequeños y medianos comercios. Permite la catalogación detallada de mercancías con alertas automáticas de bajo stock en tiempo real. La interfaz de punto de venta (POS) está optimizada para el uso rápido con atajos de teclado y escáneres de códigos de barras, conectándose de manera estable con la base de datos centralizada para evitar discrepancias de inventario.',
      en: 'A robust dashboard designed for small and medium retail businesses. It allows detailed classification of merchandise with automatic real-time low-stock alerts. The point of sale (POS) interface is optimized for speed using keyboard shortcuts and barcode scanners, establishing stable database connections to prevent stock discrepancies.',
      pt: 'Painel robusto projetado para pequenos e médios comércios. Permite a catalogação detalhada de mercadorias com alertas automáticos de estoque baixo em tempo real. A interface de ponto de venda (POS) é otimizada para uso rápido com atalhos de teclado e scanners de código de barras, conectando-se de forma estável com o banco de dados centralizado.'
    },
    category: 'system',
    tags: ['POS', 'Inventario', 'Control de Stock', 'Dashboard Administrativo'],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'AdminLTE'],
    metrics: [
      {
        label: {
          es: 'Precisión de Inventario',
          en: 'Inventory Precision',
          pt: 'Precisão de Estoque'
        },
        value: '100%'
      },
      {
        label: {
          es: 'Tiempo de Registro',
          en: 'Registration Latency',
          pt: 'Tempo de Registro'
        },
        value: '<2s'
      },
      {
        label: {
          es: 'Eficiencia de Ventas',
          en: 'Sales Efficiency',
          pt: 'Eficiência de Vendas'
        },
        value: '+30%'
      }
    ],
    featured: false,
    image: 'pos'
  },
  {
    id: 'reservas-hotel',
    slug: 'reservas-hotel',
    title: {
      es: 'Sistema de Reservas para Hotel',
      en: 'Hotel Booking System',
      pt: 'Sistema de Reservas de Hotel'
    },
    subtitle: {
      es: 'Motor de Búsqueda y Reserva de Habitaciones',
      en: 'Room Search & Booking Engine',
      pt: 'Motor de Busca e Reserva de Quartos'
    },
    description: {
      es: 'Gestión inteligente de disponibilidad hotelera en tiempo real, panel de reserva interactivo para huéspedes y control de check-in / check-out.',
      en: 'Intelligent real-time hotel availability management, interactive guest reservation dashboard, and check-in / check-out control.',
      pt: 'Gestão inteligente de disponibilidade de hotel em tempo real, painel de reservas interativo para hóspedes e controle de check-in / check-out.'
    },
    longDescription: {
      es: 'Creado para digitalizar las operaciones de reservas y hospederías. El sistema permite al cliente explorar habitaciones mediante una galería interactiva, verificar la disponibilidad exacta por rango de fechas mediante un calendario dinámico y reservar. El backend automatiza la generación de recibos en formato PDF y actualiza el estado de las suites para el personal de limpieza.',
      en: 'Built to digitize reservation and lodging operations. The system allows clients to explore rooms through an interactive gallery, verify exact availability by date range via a dynamic calendar, and book. The backend automates PDF receipt generation and updates suite cleaning statuses for hotel staff.',
      pt: 'Criado para digitalizar operações de reserva e hospedagem. O sistema permite ao cliente explorar quartos através de uma galeria interativa, verificar a disponibilidade exata por intervalo de datas usando calendário dinâmico e reservar. O backend automatiza a geração de recibos em PDF e atualiza os status de limpeza para a equipe.'
    },
    category: 'web',
    tags: ['Reservas', 'Sector Turístico', 'Calendario Dinámico', 'PDF Engine'],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'CalendarAPI'],
    metrics: [
      {
        label: {
          es: 'Habitaciones Gestionadas',
          en: 'Rooms Managed',
          pt: 'Quartos Gerenciados'
        },
        value: '120+'
      },
      {
        label: {
          es: 'Error de Reservas',
          en: 'Overbooking Error',
          pt: 'Erro de Reservas'
        },
        value: '0%'
      },
      {
        label: {
          es: 'Generación de Reportes',
          en: 'Report Generation',
          pt: 'Geração de Relatórios'
        },
        value: 'Instantánea'
      }
    ],
    featured: false,
    image: 'hotel'
  },
  {
    id: 'marketplace',
    slug: 'marketplace',
    title: {
      es: 'Marketplace Multivendedor',
      en: 'Multi-vendor Marketplace',
      pt: 'Marketplace Multivendedor'
    },
    subtitle: {
      es: 'Plataforma Conectiva para Proveedores y Compradores',
      en: 'Connective Platform for Sellers & Buyers',
      pt: 'Plataforma Conectiva para Vendedores e Compradores'
    },
    description: {
      es: 'Portal web multi-tienda con registro independiente de comercios, catálogo general unificado y mensajería de contacto rápido.',
      en: 'Multi-store web portal with independent business registration, unified catalog search, and quick contact messaging.',
      pt: 'Portal web multi-loja com registro independente de comércios, catálogo geral unificado e mensagens de contato rápido.'
    },
    longDescription: {
      es: 'Una robusta plataforma que reúne a múltiples vendedores bajo una misma sombrilla tecnológica. Cada proveedor cuenta con un minisitio editable con su propio catálogo y ofertas. Los clientes pueden buscar y filtrar productos en todo el directorio, interactuando de manera directa con cada vendedor para compras o cotizaciones personalizadas mediante sistemas de mensajería integrados.',
      en: 'A robust platform bringing together multiple vendors under a single technical umbrella. Each seller features a customizable mini-site with their own catalog and offers. Customers can search and filter products across the whole directory, interacting directly with each vendor for custom quotes through messaging integrations.',
      pt: 'Uma plataforma robusta que reúne vários vendedores sob o mesmo guarda-chuva tecnológico. Cada provedor possui um mini-site editável com catálogo próprio. Os clientes podem pesquisar e filtrar produtos em todo o diretório, interagindo diretamente com cada vendedor para compras por meio de mensageria.'
    },
    category: 'web',
    tags: ['Marketplace', 'Multi-tenant Lógico', 'Buscador Inteligente', 'Directorio'],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'Responsive Grid'],
    metrics: [
      {
        label: {
          es: 'Vendedores Registrados',
          en: 'Registered Sellers',
          pt: 'Vendedores Registrados'
        },
        value: '45+'
      },
      {
        label: {
          es: 'Búsquedas por Minuto',
          en: 'Searches Per Minute',
          pt: 'Buscas por Minuto'
        },
        value: '500+'
      },
      {
        label: {
          es: 'SEO Authority Index',
          en: 'SEO Authority Index',
          pt: 'Índice de Autoridade SEO'
        },
        value: 'Excelente'
      }
    ],
    featured: false,
    image: 'market'
  }
];
