import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'mereyink-cardapio-digital',
    slug: 'mereyink-cardapio-digital',
    title: {
      es: 'Mereyink - Cardápio Digital & SaaS POS',
      en: 'Mereyink - Digital Menu & SaaS POS',
      pt: 'Mereyink - Cardápio Digital e SaaS POS'
    },
    subtitle: {
      es: 'Plataforma SaaS de Ventas y Gestión para Restaurantes',
      en: 'Multi-Tenant SaaS Sales & Order Management Platform',
      pt: 'Plataforma SaaS de Vendas e Gestão para Restaurantes'
    },
    description: {
      es: 'Plataforma premium de menú digital en producción para restaurantes, construida en Laravel, Filament y Next.js. Permite la toma de pedidos interactiva y administración fluida con PostgreSQL.',
      en: 'Premium production-grade digital menu platform for restaurants, built with Laravel, Filament, and Next.js, featuring interactive order taking and PostgreSQL backend.',
      pt: 'Plataforma premium de cardápio digital em produção para restaurantes, construída em Laravel, Filament e Next.js, com tomada de pedidos interativa e banco de dados PostgreSQL.'
    },
    longDescription: {
      es: 'Mereyink es un SaaS comercial en producción que resuelve la fricción de ventas en restaurantes de alto tráfico. Diseñado con una arquitectura desacoplada, utiliza un panel administrativo robusto en Laravel y Filament para la gestión interna de mesas, comandas, productos y caja. El frontend está desarrollado en Next.js, garantizando velocidades de carga instantáneas para el cliente final al escanear códigos QR. El sistema completo está respaldado por PostgreSQL y Docker, asegurando alta disponibilidad y concurrencia optimizada.',
      en: 'Mereyink is a production-grade commercial SaaS solving sales friction in high-traffic restaurants. Engineered with a decoupled architecture, it uses a robust admin panel in Laravel and Filament for internal management of tables, orders, products, and cashier metrics. The client-facing frontend is built on Next.js, ensuring instant load speeds upon scanning QR codes. Supported entirely by PostgreSQL and Docker, guaranteeing high availability and optimized concurrent load handling.',
      pt: 'O Mereyink é um SaaS comercial em produção que resolve a fricção de vendas em restaurantes de alto tráfego. Projetado com uma arquitetura desacoplada, utiliza um painel administrativo robusto em Laravel e Filament para gestão interna de mesas, comandas, produtos e caixa. O frontend voltado ao cliente é construído em Next.js, garantindo velocidades de carregamento instantâneas ao escanear códigos QR. Suportado inteiramente por PostgreSQL e Docker.'
    },
    category: 'saas',
    tags: ['SaaS POS', 'Digital Menu', 'Production Product', 'Decoupled Architectures'],
    technologies: ['Laravel', 'Filament Admin', 'PostgreSQL', 'Next.js', 'Tailwind CSS', 'Docker'],
    metrics: [
      {
        label: {
          es: 'Carga de Página QR',
          en: 'QR Page Load Time',
          pt: 'Tempo de Carga QR'
        },
        value: '<1.2s'
      },
      {
        label: {
          es: 'Administración Backend',
          en: 'Backend Panel',
          pt: 'Painel Admin Backend'
        },
        value: 'Filament L11'
      },
      {
        label: {
          es: 'Base de Datos',
          en: 'Database Engine',
          pt: 'Motor de Banco'
        },
        value: 'PostgreSQL'
      },
      {
        label: {
          es: 'Disponibilidad',
          en: 'Core Availability',
          pt: 'Disponibilidade'
        },
        value: '99.9%'
      }
    ],
    architecture: {
      nodes: [
        {
          id: 'qr_client',
          label: {
            es: 'Cliente en Mesa (Next.js QR)',
            en: 'Table Client (Next.js QR)',
            pt: 'Cliente na Mesa (Next.js QR)'
          },
          type: 'client'
        },
        {
          id: 'filament_admin',
          label: {
            es: 'Administrador (Filament Panel)',
            en: 'Admin Panel (Filament)',
            pt: 'Painel Admin (Filament)'
          },
          type: 'server'
        },
        {
          id: 'laravel_core',
          label: {
            es: 'Laravel core (SaaS Engine)',
            en: 'Laravel Core (SaaS Engine)',
            pt: 'Laravel Core (SaaS Engine)'
          },
          type: 'server'
        },
        {
          id: 'postgre_db',
          label: {
            es: 'PostgreSQL (SaaS Data)',
            en: 'PostgreSQL (SaaS Data)',
            pt: 'PostgreSQL (SaaS Data)'
          },
          type: 'database'
        }
      ],
      edges: [
        {
          from: 'qr_client',
          to: 'laravel_core',
          label: {
            es: 'Realizar Pedido JSON',
            en: 'Submit Order JSON',
            pt: 'Realizar Pedido JSON'
          }
        },
        {
          from: 'laravel_core',
          to: 'postgre_db',
          label: {
            es: 'Persistencia ACID',
            en: 'ACID Persistence',
            pt: 'Persistência ACID'
          }
        },
        {
          from: 'laravel_core',
          to: 'filament_admin',
          label: {
            es: 'Notificación de Mesa',
            en: 'Table Notification',
            pt: 'Notificação de Mesa'
          }
        }
      ]
    },
    liveUrl: 'https://mereyink.com',
    featured: true,
    image: 'supermarket'
  },
  {
    id: 'laravel-enterprise-starter',
    slug: 'laravel-enterprise-starter',
    title: {
      es: 'Laravel Enterprise SaaS Boilerplate',
      en: 'Laravel Enterprise SaaS Boilerplate',
      pt: 'Laravel Enterprise SaaS Boilerplate'
    },
    subtitle: {
      es: 'Arquitectura SaaS Multitenant y Motor ElasticSearch',
      en: 'High-Scalability Multi-tenant SaaS & ElasticSearch',
      pt: 'Arquitetura SaaS Multitenant e Motor ElasticSearch'
    },
    description: {
      es: 'Boilerplate empresarial y plataforma SaaS agrícola con aislamiento físico de base de datos por inquilino (Database-per-Tenant), sincronización asíncrona a ElasticSearch y tests de Pest PHP.',
      en: 'Enterprise agricultural SaaS platform with strict physical database-per-tenant isolation, asynchronous ElasticSearch synchronization, and 100% green Pest PHP tests.',
      pt: 'Boilerplate empresarial e plataforma SaaS agrícola com isolamento físico de banco de dados por cliente (Database-per-Tenant), sincronização assíncrona com ElasticSearch e testes Pest PHP.'
    },
    longDescription: {
      es: 'AgroFlow representa la cúspide del diseño de sistemas modernos para el sector agrícola empresarial. Diseñado bajo principios de Clean Architecture (separación estricta de capas de Dominio, Aplicación e Infraestructura), este SaaS multi-inquilino garantiza el aislamiento de datos a nivel de base de datos física (Database-per-Tenant) mediante un middleware dinámico en Laravel 11. Además, integra sincronización asíncrona de búsqueda con ElasticSearch 8 a través de colas de Redis y Horizon para latencias de consulta menores a 150ms, todo respaldado por una suite de pruebas robusta en Pest PHP con cobertura del 100% verde.',
      en: 'AgroFlow represents the pinnacle of modern enterprise-level systems design for the agricultural sector. Engineered under Clean Architecture principles (strict separation of Domain, Application, and Infrastructure layers), this multi-tenant SaaS guarantees absolute physical data isolation (Database-per-Tenant) using dynamic middleware in Laravel 11. Additionally, it integrates asynchronous ElasticSearch 8 sync handled via background jobs (Redis/Horizon) to minimize request latency below 150ms, all validated by 100% green Pest PHP test suites.',
      pt: 'O AgroFlow representa o ápice do design de sistemas modernos para o setor agrícola corporativo. Projetado sob os princípios de Clean Architecture (separação estrita de Domínio, Aplicação e Infraestrutura), este SaaS garante isolamento físico de banco de dados (Database-per-Tenant) usando middleware dinâmico no Laravel 11. Além disso, integra sincronização assíncrona com ElasticSearch 8 via filas Redis e Horizon para latências de consulta inferiores a 150ms, tudo validado por testes Pest PHP 100% verdes.'
    },
    category: 'saas',
    tags: ['Next-Gen SaaS', 'Database-per-Tenant', 'Search Engines', 'Clean Architecture', 'Redis / Horizon'],
    technologies: ['Laravel 11', 'PostgreSQL', 'ElasticSearch 8', 'Pest PHP', 'Docker', 'Redis', 'Horizon'],
    metrics: [
      {
        label: {
          es: 'Aislamiento Físico',
          en: 'Database Isolation',
          pt: 'Isolamento Físico'
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
          es: 'Tests Pest PHP',
          en: 'Pest Test Suite',
          pt: 'Testes Pest PHP'
        },
        value: '100% Green'
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
            es: 'Redis & Horizon (Queue)',
            en: 'Redis & Horizon (Queue)',
            pt: 'Redis e Horizon (Fila)'
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
            es: 'IdentifyTenant Middleware',
            en: 'IdentifyTenant Middleware',
            pt: 'IdentifyTenant Middleware'
          }
        },
        {
          from: 'laravel',
          to: 'redis',
          label: {
            es: 'Job de Sincronización',
            en: 'Sync Document Job',
            pt: 'Job de Sincronização'
          }
        },
        {
          from: 'laravel',
          to: 'tenant_db',
          label: {
            es: 'TenantConnectionService',
            en: 'TenantConnectionService',
            pt: 'TenantConnectionService'
          }
        },
        {
          from: 'redis',
          to: 'elasticsearch',
          label: {
            es: 'Horizon Async Sync',
            en: 'Horizon Async Sync',
            pt: 'Sincronização Assíncrona'
          }
        }
      ]
    },
    githubUrl: 'https://github.com/Rajesh-Rampersad/laravel-enterprise-starter',
    featured: true,
    image: 'agroflow'
  },
  {
    id: 'supermercado_api_fastApi',
    slug: 'supermercado_api_fastApi',
    title: {
      es: 'Supermercado API & Stock Engine',
      en: 'Supermarket API & Stock Engine',
      pt: 'Supermercado API e Motor de Estoque'
    },
    subtitle: {
      es: 'Motor de Inventario de Alta Velocidad & RBAC',
      en: 'High-Speed Inventory Engine & RBAC Security',
      pt: 'Motor de Estoque de Alta Velocidade e Segurança RBAC'
    },
    description: {
      es: 'API de producción para gestión de supermercados, construida en FastAPI, SQLite y Pydantic v2. Implementa control atómico de stock y autenticación avanzada por roles (RBAC).',
      en: 'Production API for supermarket stock management built on FastAPI, SQLite, and Pydantic v2, featuring atomic stock control and advanced role-based security (RBAC).',
      pt: 'API de produção para gestão de supermercados construída em FastAPI, SQLite e Pydantic v2, com controle atômico de estoque e segurança avançada baseada em funções (RBAC).'
    },
    longDescription: {
      es: 'Esta API representa un motor de inventario moderno, hiperveloz y altamente seguro diseñado bajo principios REST y Clean Architecture. Protegido mediante un sistema robusto de tokens JWT y control de acceso basado en roles (RBAC) con dependencias inyectadas en FastAPI. Este backend automatiza flujos críticos como el registro de categorías y control de existencias de mercadería con validaciones automáticas mediante Pydantic v2. Además, cuenta con una suite de pruebas intensiva con Pytest que reporta una cobertura del 96%, asegurando la máxima fiabilidad en producción.',
      en: 'This API is a modern, ultra-fast, and highly secure inventory engine designed under REST principles and Clean Architecture. Secured with a robust JWT token system and role-based access control (RBAC) with dynamic dependency injection in FastAPI. This backend automates critical workflows like category registration and product stock adjustments with automatic validation models using Pydantic v2. Additionally, it features an intensive testing suite with Pytest reporting a 96% coverage, ensuring maximum reliability in production.',
      pt: 'Esta API é um motor de estoque moderno, hiper-veloz e altamente seguro projetado sob os princípios REST e Clean Architecture. Protegido por um sistema robusto de tokens JWT e controle de acesso baseado em funções (RBAC) com injeção de dependência dinâmica no FastAPI. Este backend automatiza fluxos críticos como o registro de categorias e o ajuste de estoque de produtos com validação automática via Pydantic v2. Além disso, conta com uma suite de testes intensiva com Pytest reportando 96% de cobertura, garantindo máxima confiabilidade em produção.'
    },
    category: 'system',
    tags: ['FastAPI Backend', 'Inventory Engine', 'RBAC Security', 'JWT Auth', 'Production Ready'],
    technologies: ['FastAPI', 'Python 3', 'SQLAlchemy', 'Pydantic v2', 'SQLite', 'Pytest', 'JWT'],
    metrics: [
      {
        label: {
          es: 'Latencia de Endpoint',
          en: 'Endpoint Latency',
          pt: 'Latência do Endpoint'
        },
        value: '<85ms'
      },
      {
        label: {
          es: 'Seguridad Acceso',
          en: 'Access Security',
          pt: 'Segurança de Acesso'
        },
        value: 'JWT & RBAC'
      },
      {
        label: {
          es: 'Cobertura de Código',
          en: 'Code Coverage',
          pt: 'Cobertura de Código'
        },
        value: '96%'
      },
      {
        label: {
          es: 'Arquitectura Limpia',
          en: 'Clean Architecture',
          pt: 'Arquitetura Limpa'
        },
        value: 'Strict Core'
      }
    ],
    architecture: {
      nodes: [
        {
          id: 'client',
          label: {
            es: 'Cliente Frontend / Mobile',
            en: 'Frontend / Mobile Client',
            pt: 'Cliente Frontend / Mobile'
          },
          type: 'client'
        },
        {
          id: 'fastapi',
          label: {
            es: 'FastAPI Router Engine',
            en: 'FastAPI Router Engine',
            pt: 'Motor FastAPI Router'
          },
          type: 'server'
        },
        {
          id: 'auth',
          label: {
            es: 'JWT Auth Layer (Passlib)',
            en: 'JWT Auth Layer (Passlib)',
            pt: 'Camada de Autenticação JWT'
          },
          type: 'external'
        },
        {
          id: 'pydantic',
          label: {
            es: 'Validador Pydantic v2',
            en: 'Pydantic v2 Validator',
            pt: 'Validador Pydantic v2'
          },
          type: 'server'
        },
        {
          id: 'sqlite',
          label: {
            es: 'Base de Datos SQLite',
            en: 'SQLite Database',
            pt: 'Banco de Dados SQLite'
          },
          type: 'database'
        }
      ],
      edges: [
        {
          from: 'client',
          to: 'fastapi',
          label: {
            es: 'HTTPS / JSON',
            en: 'HTTPS / JSON',
            pt: 'HTTPS / JSON'
          }
        },
        {
          from: 'fastapi',
          to: 'auth',
          label: {
            es: 'Verificación JWT',
            en: 'JWT Verification',
            pt: 'Verificação JWT'
          }
        },
        {
          from: 'auth',
          to: 'pydantic',
          label: {
            es: 'Validar Esquema',
            en: 'Validate Schema',
            pt: 'Validar Esquema'
          }
        },
        {
          from: 'pydantic',
          to: 'sqlite',
          label: {
            es: 'Transacción ACID',
            en: 'ACID Transaction',
            pt: 'Transação ACID'
          }
        }
      ]
    },
    githubUrl: 'https://github.com/Rajesh-Rampersad/supermercado_api_fastApi',
    featured: true,
    image: 'supermarket'
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
            pt: 'Banco de Datos MySQL'
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
      pt: 'Painel robusto projetado para pequenos e médios comércios. Permite a catalogação detalhada de mercadorias com alertas automáticos de estoque baixo em tempo real. A interface de ponto de venda (POS) é otimizada para uso rápido con atalhos de teclado e scanners de código de barras, conectando-se de forma estável com o banco de dados centralizado.'
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
