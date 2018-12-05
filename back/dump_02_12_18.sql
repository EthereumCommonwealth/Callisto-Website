--
-- PostgreSQL database dump
--

-- Dumped from database version 10.4 (Debian 10.4-2.pgdg90+1)
-- Dumped by pg_dump version 10.4 (Debian 10.4-2.pgdg90+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: auth_group; Type: TABLE; Schema: public; Owner: callisto
--

CREATE TABLE public.auth_group (
    id integer NOT NULL,
    name character varying(80) NOT NULL
);


ALTER TABLE public.auth_group OWNER TO callisto;

--
-- Name: auth_group_id_seq; Type: SEQUENCE; Schema: public; Owner: callisto
--

CREATE SEQUENCE public.auth_group_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_group_id_seq OWNER TO callisto;

--
-- Name: auth_group_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: callisto
--

ALTER SEQUENCE public.auth_group_id_seq OWNED BY public.auth_group.id;


--
-- Name: auth_group_permissions; Type: TABLE; Schema: public; Owner: callisto
--

CREATE TABLE public.auth_group_permissions (
    id integer NOT NULL,
    group_id integer NOT NULL,
    permission_id integer NOT NULL
);


ALTER TABLE public.auth_group_permissions OWNER TO callisto;

--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: callisto
--

CREATE SEQUENCE public.auth_group_permissions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_group_permissions_id_seq OWNER TO callisto;

--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: callisto
--

ALTER SEQUENCE public.auth_group_permissions_id_seq OWNED BY public.auth_group_permissions.id;


--
-- Name: auth_permission; Type: TABLE; Schema: public; Owner: callisto
--

CREATE TABLE public.auth_permission (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    content_type_id integer NOT NULL,
    codename character varying(100) NOT NULL
);


ALTER TABLE public.auth_permission OWNER TO callisto;

--
-- Name: auth_permission_id_seq; Type: SEQUENCE; Schema: public; Owner: callisto
--

CREATE SEQUENCE public.auth_permission_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_permission_id_seq OWNER TO callisto;

--
-- Name: auth_permission_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: callisto
--

ALTER SEQUENCE public.auth_permission_id_seq OWNED BY public.auth_permission.id;


--
-- Name: auth_user; Type: TABLE; Schema: public; Owner: callisto
--

CREATE TABLE public.auth_user (
    id integer NOT NULL,
    password character varying(128) NOT NULL,
    last_login timestamp with time zone,
    is_superuser boolean NOT NULL,
    username character varying(150) NOT NULL,
    first_name character varying(30) NOT NULL,
    last_name character varying(150) NOT NULL,
    email character varying(254) NOT NULL,
    is_staff boolean NOT NULL,
    is_active boolean NOT NULL,
    date_joined timestamp with time zone NOT NULL
);


ALTER TABLE public.auth_user OWNER TO callisto;

--
-- Name: auth_user_groups; Type: TABLE; Schema: public; Owner: callisto
--

CREATE TABLE public.auth_user_groups (
    id integer NOT NULL,
    user_id integer NOT NULL,
    group_id integer NOT NULL
);


ALTER TABLE public.auth_user_groups OWNER TO callisto;

--
-- Name: auth_user_groups_id_seq; Type: SEQUENCE; Schema: public; Owner: callisto
--

CREATE SEQUENCE public.auth_user_groups_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_user_groups_id_seq OWNER TO callisto;

--
-- Name: auth_user_groups_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: callisto
--

ALTER SEQUENCE public.auth_user_groups_id_seq OWNED BY public.auth_user_groups.id;


--
-- Name: auth_user_id_seq; Type: SEQUENCE; Schema: public; Owner: callisto
--

CREATE SEQUENCE public.auth_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_user_id_seq OWNER TO callisto;

--
-- Name: auth_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: callisto
--

ALTER SEQUENCE public.auth_user_id_seq OWNED BY public.auth_user.id;


--
-- Name: auth_user_user_permissions; Type: TABLE; Schema: public; Owner: callisto
--

CREATE TABLE public.auth_user_user_permissions (
    id integer NOT NULL,
    user_id integer NOT NULL,
    permission_id integer NOT NULL
);


ALTER TABLE public.auth_user_user_permissions OWNER TO callisto;

--
-- Name: auth_user_user_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: callisto
--

CREATE SEQUENCE public.auth_user_user_permissions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_user_user_permissions_id_seq OWNER TO callisto;

--
-- Name: auth_user_user_permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: callisto
--

ALTER SEQUENCE public.auth_user_user_permissions_id_seq OWNED BY public.auth_user_user_permissions.id;


--
-- Name: django_admin_log; Type: TABLE; Schema: public; Owner: callisto
--

CREATE TABLE public.django_admin_log (
    id integer NOT NULL,
    action_time timestamp with time zone NOT NULL,
    object_id text,
    object_repr character varying(200) NOT NULL,
    action_flag smallint NOT NULL,
    change_message text NOT NULL,
    content_type_id integer,
    user_id integer NOT NULL,
    CONSTRAINT django_admin_log_action_flag_check CHECK ((action_flag >= 0))
);


ALTER TABLE public.django_admin_log OWNER TO callisto;

--
-- Name: django_admin_log_id_seq; Type: SEQUENCE; Schema: public; Owner: callisto
--

CREATE SEQUENCE public.django_admin_log_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.django_admin_log_id_seq OWNER TO callisto;

--
-- Name: django_admin_log_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: callisto
--

ALTER SEQUENCE public.django_admin_log_id_seq OWNED BY public.django_admin_log.id;


--
-- Name: django_content_type; Type: TABLE; Schema: public; Owner: callisto
--

CREATE TABLE public.django_content_type (
    id integer NOT NULL,
    app_label character varying(100) NOT NULL,
    model character varying(100) NOT NULL
);


ALTER TABLE public.django_content_type OWNER TO callisto;

--
-- Name: django_content_type_id_seq; Type: SEQUENCE; Schema: public; Owner: callisto
--

CREATE SEQUENCE public.django_content_type_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.django_content_type_id_seq OWNER TO callisto;

--
-- Name: django_content_type_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: callisto
--

ALTER SEQUENCE public.django_content_type_id_seq OWNED BY public.django_content_type.id;


--
-- Name: django_migrations; Type: TABLE; Schema: public; Owner: callisto
--

CREATE TABLE public.django_migrations (
    id integer NOT NULL,
    app character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    applied timestamp with time zone NOT NULL
);


ALTER TABLE public.django_migrations OWNER TO callisto;

--
-- Name: django_migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: callisto
--

CREATE SEQUENCE public.django_migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.django_migrations_id_seq OWNER TO callisto;

--
-- Name: django_migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: callisto
--

ALTER SEQUENCE public.django_migrations_id_seq OWNED BY public.django_migrations.id;


--
-- Name: django_session; Type: TABLE; Schema: public; Owner: callisto
--

CREATE TABLE public.django_session (
    session_key character varying(40) NOT NULL,
    session_data text NOT NULL,
    expire_date timestamp with time zone NOT NULL
);


ALTER TABLE public.django_session OWNER TO callisto;

--
-- Name: exchanges_exchange; Type: TABLE; Schema: public; Owner: callisto
--

CREATE TABLE public.exchanges_exchange (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    logo character varying(100) NOT NULL,
    url character varying(200) NOT NULL,
    "order" smallint,
    coming_soon boolean NOT NULL,
    CONSTRAINT exchanges_exchange_order_check CHECK (("order" >= 0))
);


ALTER TABLE public.exchanges_exchange OWNER TO callisto;

--
-- Name: exchanges_exchange_id_seq; Type: SEQUENCE; Schema: public; Owner: callisto
--

CREATE SEQUENCE public.exchanges_exchange_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.exchanges_exchange_id_seq OWNER TO callisto;

--
-- Name: exchanges_exchange_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: callisto
--

ALTER SEQUENCE public.exchanges_exchange_id_seq OWNED BY public.exchanges_exchange.id;


--
-- Name: mining_blockexplorer; Type: TABLE; Schema: public; Owner: callisto
--

CREATE TABLE public.mining_blockexplorer (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    url character varying(200) NOT NULL
);


ALTER TABLE public.mining_blockexplorer OWNER TO callisto;

--
-- Name: mining_blockexplorer_id_seq; Type: SEQUENCE; Schema: public; Owner: callisto
--

CREATE SEQUENCE public.mining_blockexplorer_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.mining_blockexplorer_id_seq OWNER TO callisto;

--
-- Name: mining_blockexplorer_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: callisto
--

ALTER SEQUENCE public.mining_blockexplorer_id_seq OWNED BY public.mining_blockexplorer.id;


--
-- Name: mining_miningpool; Type: TABLE; Schema: public; Owner: callisto
--

CREATE TABLE public.mining_miningpool (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    url character varying(200) NOT NULL
);


ALTER TABLE public.mining_miningpool OWNER TO callisto;

--
-- Name: mining_miningpool_id_seq; Type: SEQUENCE; Schema: public; Owner: callisto
--

CREATE SEQUENCE public.mining_miningpool_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.mining_miningpool_id_seq OWNER TO callisto;

--
-- Name: mining_miningpool_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: callisto
--

ALTER SEQUENCE public.mining_miningpool_id_seq OWNED BY public.mining_miningpool.id;


--
-- Name: team_membersocialnetwork; Type: TABLE; Schema: public; Owner: callisto
--

CREATE TABLE public.team_membersocialnetwork (
    id integer NOT NULL,
    url character varying(200) NOT NULL,
    active boolean NOT NULL,
    member_id integer NOT NULL,
    network_id integer NOT NULL
);


ALTER TABLE public.team_membersocialnetwork OWNER TO callisto;

--
-- Name: team_membersocialnetwork_id_seq; Type: SEQUENCE; Schema: public; Owner: callisto
--

CREATE SEQUENCE public.team_membersocialnetwork_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.team_membersocialnetwork_id_seq OWNER TO callisto;

--
-- Name: team_membersocialnetwork_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: callisto
--

ALTER SEQUENCE public.team_membersocialnetwork_id_seq OWNED BY public.team_membersocialnetwork.id;


--
-- Name: team_socialnetwork; Type: TABLE; Schema: public; Owner: callisto
--

CREATE TABLE public.team_socialnetwork (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    icon character varying(50) NOT NULL
);


ALTER TABLE public.team_socialnetwork OWNER TO callisto;

--
-- Name: team_socialnetwork_id_seq; Type: SEQUENCE; Schema: public; Owner: callisto
--

CREATE SEQUENCE public.team_socialnetwork_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.team_socialnetwork_id_seq OWNER TO callisto;

--
-- Name: team_socialnetwork_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: callisto
--

ALTER SEQUENCE public.team_socialnetwork_id_seq OWNED BY public.team_socialnetwork.id;


--
-- Name: team_teammember; Type: TABLE; Schema: public; Owner: callisto
--

CREATE TABLE public.team_teammember (
    id integer NOT NULL,
    avatar character varying(100) NOT NULL,
    name character varying(100) NOT NULL,
    "position" character varying(100) NOT NULL,
    bio text NOT NULL,
    "order" integer
);


ALTER TABLE public.team_teammember OWNER TO callisto;

--
-- Name: team_teammember_id_seq; Type: SEQUENCE; Schema: public; Owner: callisto
--

CREATE SEQUENCE public.team_teammember_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.team_teammember_id_seq OWNER TO callisto;

--
-- Name: team_teammember_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: callisto
--

ALTER SEQUENCE public.team_teammember_id_seq OWNED BY public.team_teammember.id;


--
-- Name: wallets_wallet; Type: TABLE; Schema: public; Owner: callisto
--

CREATE TABLE public.wallets_wallet (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    url character varying(255) NOT NULL,
    platform_id integer NOT NULL,
    cold_staking boolean NOT NULL
);


ALTER TABLE public.wallets_wallet OWNER TO callisto;

--
-- Name: wallets_wallet_id_seq; Type: SEQUENCE; Schema: public; Owner: callisto
--

CREATE SEQUENCE public.wallets_wallet_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.wallets_wallet_id_seq OWNER TO callisto;

--
-- Name: wallets_wallet_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: callisto
--

ALTER SEQUENCE public.wallets_wallet_id_seq OWNED BY public.wallets_wallet.id;


--
-- Name: wallets_walletplatform; Type: TABLE; Schema: public; Owner: callisto
--

CREATE TABLE public.wallets_walletplatform (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    icon character varying(100) NOT NULL
);


ALTER TABLE public.wallets_walletplatform OWNER TO callisto;

--
-- Name: wallets_walletplatform_id_seq; Type: SEQUENCE; Schema: public; Owner: callisto
--

CREATE SEQUENCE public.wallets_walletplatform_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.wallets_walletplatform_id_seq OWNER TO callisto;

--
-- Name: wallets_walletplatform_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: callisto
--

ALTER SEQUENCE public.wallets_walletplatform_id_seq OWNED BY public.wallets_walletplatform.id;


--
-- Name: auth_group id; Type: DEFAULT; Schema: public; Owner: callisto
--

ALTER TABLE ONLY public.auth_group ALTER COLUMN id SET DEFAULT nextval('public.auth_group_id_seq'::regclass);


--
-- Name: auth_group_permissions id; Type: DEFAULT; Schema: public; Owner: callisto
--

ALTER TABLE ONLY public.auth_group_permissions ALTER COLUMN id SET DEFAULT nextval('public.auth_group_permissions_id_seq'::regclass);


--
-- Name: auth_permission id; Type: DEFAULT; Schema: public; Owner: callisto
--

ALTER TABLE ONLY public.auth_permission ALTER COLUMN id SET DEFAULT nextval('public.auth_permission_id_seq'::regclass);


--
-- Name: auth_user id; Type: DEFAULT; Schema: public; Owner: callisto
--

ALTER TABLE ONLY public.auth_user ALTER COLUMN id SET DEFAULT nextval('public.auth_user_id_seq'::regclass);


--
-- Name: auth_user_groups id; Type: DEFAULT; Schema: public; Owner: callisto
--

ALTER TABLE ONLY public.auth_user_groups ALTER COLUMN id SET DEFAULT nextval('public.auth_user_groups_id_seq'::regclass);


--
-- Name: auth_user_user_permissions id; Type: DEFAULT; Schema: public; Owner: callisto
--

ALTER TABLE ONLY public.auth_user_user_permissions ALTER COLUMN id SET DEFAULT nextval('public.auth_user_user_permissions_id_seq'::regclass);


--
-- Name: django_admin_log id; Type: DEFAULT; Schema: public; Owner: callisto
--

ALTER TABLE ONLY public.django_admin_log ALTER COLUMN id SET DEFAULT nextval('public.django_admin_log_id_seq'::regclass);


--
-- Name: django_content_type id; Type: DEFAULT; Schema: public; Owner: callisto
--

ALTER TABLE ONLY public.django_content_type ALTER COLUMN id SET DEFAULT nextval('public.django_content_type_id_seq'::regclass);


--
-- Name: django_migrations id; Type: DEFAULT; Schema: public; Owner: callisto
--

ALTER TABLE ONLY public.django_migrations ALTER COLUMN id SET DEFAULT nextval('public.django_migrations_id_seq'::regclass);


--
-- Name: exchanges_exchange id; Type: DEFAULT; Schema: public; Owner: callisto
--

ALTER TABLE ONLY public.exchanges_exchange ALTER COLUMN id SET DEFAULT nextval('public.exchanges_exchange_id_seq'::regclass);


--
-- Name: mining_blockexplorer id; Type: DEFAULT; Schema: public; Owner: callisto
--

ALTER TABLE ONLY public.mining_blockexplorer ALTER COLUMN id SET DEFAULT nextval('public.mining_blockexplorer_id_seq'::regclass);


--
-- Name: mining_miningpool id; Type: DEFAULT; Schema: public; Owner: callisto
--

ALTER TABLE ONLY public.mining_miningpool ALTER COLUMN id SET DEFAULT nextval('public.mining_miningpool_id_seq'::regclass);


--
-- Name: team_membersocialnetwork id; Type: DEFAULT; Schema: public; Owner: callisto
--

ALTER TABLE ONLY public.team_membersocialnetwork ALTER COLUMN id SET DEFAULT nextval('public.team_membersocialnetwork_id_seq'::regclass);


--
-- Name: team_socialnetwork id; Type: DEFAULT; Schema: public; Owner: callisto
--

ALTER TABLE ONLY public.team_socialnetwork ALTER COLUMN id SET DEFAULT nextval('public.team_socialnetwork_id_seq'::regclass);


--
-- Name: team_teammember id; Type: DEFAULT; Schema: public; Owner: callisto
--

ALTER TABLE ONLY public.team_teammember ALTER COLUMN id SET DEFAULT nextval('public.team_teammember_id_seq'::regclass);


--
-- Name: wallets_wallet id; Type: DEFAULT; Schema: public; Owner: callisto
--

ALTER TABLE ONLY public.wallets_wallet ALTER COLUMN id SET DEFAULT nextval('public.wallets_wallet_id_seq'::regclass);


--
-- Name: wallets_walletplatform id; Type: DEFAULT; Schema: public; Owner: callisto
--

ALTER TABLE ONLY public.wallets_walletplatform ALTER COLUMN id SET DEFAULT nextval('public.wallets_walletplatform_id_seq'::regclass);


--
-- Data for Name: auth_group; Type: TABLE DATA; Schema: public; Owner: callisto
--

COPY public.auth_group (id, name) FROM stdin;
\.


--
-- Data for Name: auth_group_permissions; Type: TABLE DATA; Schema: public; Owner: callisto
--

COPY public.auth_group_permissions (id, group_id, permission_id) FROM stdin;
\.


--
-- Data for Name: auth_permission; Type: TABLE DATA; Schema: public; Owner: callisto
--

COPY public.auth_permission (id, name, content_type_id, codename) FROM stdin;
1	Can add log entry	1	add_logentry
2	Can change log entry	1	change_logentry
3	Can delete log entry	1	delete_logentry
4	Can view log entry	1	view_logentry
5	Can add permission	2	add_permission
6	Can change permission	2	change_permission
7	Can delete permission	2	delete_permission
8	Can view permission	2	view_permission
9	Can add group	3	add_group
10	Can change group	3	change_group
11	Can delete group	3	delete_group
12	Can view group	3	view_group
13	Can add user	4	add_user
14	Can change user	4	change_user
15	Can delete user	4	delete_user
16	Can view user	4	view_user
17	Can add content type	5	add_contenttype
18	Can change content type	5	change_contenttype
19	Can delete content type	5	delete_contenttype
20	Can view content type	5	view_contenttype
21	Can add session	6	add_session
22	Can change session	6	change_session
23	Can delete session	6	delete_session
24	Can view session	6	view_session
25	Can add member social network	7	add_membersocialnetwork
26	Can change member social network	7	change_membersocialnetwork
27	Can delete member social network	7	delete_membersocialnetwork
28	Can view member social network	7	view_membersocialnetwork
29	Can add social network	8	add_socialnetwork
30	Can change social network	8	change_socialnetwork
31	Can delete social network	8	delete_socialnetwork
32	Can view social network	8	view_socialnetwork
33	Can add team member	9	add_teammember
34	Can change team member	9	change_teammember
35	Can delete team member	9	delete_teammember
36	Can view team member	9	view_teammember
37	Can add block explorer	10	add_blockexplorer
38	Can change block explorer	10	change_blockexplorer
39	Can delete block explorer	10	delete_blockexplorer
40	Can view block explorer	10	view_blockexplorer
41	Can add mining pool	11	add_miningpool
42	Can change mining pool	11	change_miningpool
43	Can delete mining pool	11	delete_miningpool
44	Can view mining pool	11	view_miningpool
45	Can add wallet platform	12	add_walletplatform
46	Can change wallet platform	12	change_walletplatform
47	Can delete wallet platform	12	delete_walletplatform
48	Can view wallet platform	12	view_walletplatform
49	Can add wallet	13	add_wallet
50	Can change wallet	13	change_wallet
51	Can delete wallet	13	delete_wallet
52	Can view wallet	13	view_wallet
53	Can add exchange	14	add_exchange
54	Can change exchange	14	change_exchange
55	Can delete exchange	14	delete_exchange
56	Can view exchange	14	view_exchange
\.


--
-- Data for Name: auth_user; Type: TABLE DATA; Schema: public; Owner: callisto
--

COPY public.auth_user (id, password, last_login, is_superuser, username, first_name, last_name, email, is_staff, is_active, date_joined) FROM stdin;
7	pbkdf2_sha256$120000$xYvv0yzYGLuU$zsHbtqYMofh9A2JYil+Cfp06f+mIvGMKDyi4D7J3sSk=	2018-11-18 16:57:16.355855+00	t	walis85300	Eduardo	Álvarez	eduardo.alvarez@protonmail.com	t	t	2018-11-18 16:56:19+00
6	pbkdf2_sha256$120000$Nvh0hxfFQE87$wHLGGKWUDV8qGPn/QqHzr7QEaxeRRFiZi35jajgtsYc=	2018-11-20 15:57:15+00	f	pm	Marcel	Pfingstgräf	pm@callisto.network	f	t	2018-09-30 16:47:39+00
2	pbkdf2_sha256$120000$7pLlPadO9wHI$/6RmVOKtEgwiDif2IOSzwTEXiytqIG4q1kCB8o0JYbI=	2018-11-28 19:23:36.062246+00	t	sampol18	Carlos	Sampol	s@callisto.network	t	t	2018-08-15 23:22:49+00
1	pbkdf2_sha256$120000$eBhfe2LSIjpe$8sFIzlzSwOUZ3nRi+hobisWYSE6EV8T2gexLFnJ6DG4=	2018-09-18 23:18:43.621122+00	t	gollum23	Diego	Forero	gollum23@gmail.com	t	t	2018-08-08 00:49:33+00
3	pbkdf2_sha256$120000$9Qs8pV0wcTF0$iOrwMHHzeX7hKsAVhaIMxcmVHceZZCwRPGGeRWSGMTA=	2018-09-27 12:38:05.276422+00	t	yograterol	Yohan	Graterol	yograterol@callisto.network	t	t	2018-08-15 23:25:10+00
\.


--
-- Data for Name: auth_user_groups; Type: TABLE DATA; Schema: public; Owner: callisto
--

COPY public.auth_user_groups (id, user_id, group_id) FROM stdin;
\.


--
-- Data for Name: auth_user_user_permissions; Type: TABLE DATA; Schema: public; Owner: callisto
--

COPY public.auth_user_user_permissions (id, user_id, permission_id) FROM stdin;
\.


--
-- Data for Name: django_admin_log; Type: TABLE DATA; Schema: public; Owner: callisto
--

COPY public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) FROM stdin;
1	2018-08-08 00:51:09.39581+00	1	Windows	1	[{"added": {}}, {"added": {"name": "wallet", "object": "Geth - Windows"}}, {"added": {"name": "wallet", "object": "Parity - Windows"}}, {"added": {"name": "wallet", "object": "Guarda - Windows"}}, {"added": {"name": "wallet", "object": "MyCrypto - Windows"}}]	12	1
2	2018-08-08 00:55:49.532061+00	1	clopool.pro	1	[{"added": {}}]	11	1
3	2018-08-08 00:56:08.015073+00	2	epool.io	1	[{"added": {}}]	11	1
4	2018-08-08 00:56:30.296334+00	1	explorer.callisto.network	1	[{"added": {}}]	10	1
5	2018-08-08 00:56:53.757307+00	2	https://callistoexplorer.com/home	1	[{"added": {}}]	10	1
6	2018-08-08 00:57:13.278295+00	1	explorer.callisto.network	2	[{"changed": {"fields": ["url"]}}]	10	1
7	2018-08-08 00:57:24.036506+00	2	callistoexplorer.com	2	[{"changed": {"fields": ["name"]}}]	10	1
8	2018-08-08 00:57:48.589966+00	1	Github	1	[{"added": {}}]	8	1
9	2018-08-08 00:57:58.169321+00	2	Email	1	[{"added": {}}]	8	1
10	2018-08-08 00:59:27.714372+00	1	TeamMember object (1)	1	[{"added": {}}, {"added": {"name": "member social network", "object": "MemberSocialNetwork object (1)"}}, {"added": {"name": "member social network", "object": "MemberSocialNetwork object (2)"}}]	9	1
11	2018-08-09 00:51:19.757943+00	1	BiteBTC	1	[{"added": {}}]	14	1
12	2018-08-11 02:22:18.219886+00	1	TeamMember object (1)	2	[{"changed": {"fields": ["avatar"]}}]	9	1
13	2018-08-11 02:22:57.212518+00	1	TeamMember object (1)	2	[]	9	1
14	2018-08-11 02:23:49.570449+00	2	TeamMember object (2)	1	[{"added": {}}, {"added": {"name": "member social network", "object": "MemberSocialNetwork object (3)"}}, {"added": {"name": "member social network", "object": "MemberSocialNetwork object (4)"}}]	9	1
15	2018-08-11 02:32:44.451456+00	3	TeamMember object (3)	1	[{"added": {}}, {"added": {"name": "member social network", "object": "MemberSocialNetwork object (5)"}}, {"added": {"name": "member social network", "object": "MemberSocialNetwork object (6)"}}]	9	1
16	2018-08-11 02:33:58.137075+00	4	TeamMember object (4)	1	[{"added": {}}, {"added": {"name": "member social network", "object": "MemberSocialNetwork object (7)"}}, {"added": {"name": "member social network", "object": "MemberSocialNetwork object (8)"}}]	9	1
17	2018-08-11 02:34:49.034722+00	5	TeamMember object (5)	1	[{"added": {}}, {"added": {"name": "member social network", "object": "MemberSocialNetwork object (9)"}}]	9	1
18	2018-08-11 02:36:05.576322+00	6	TeamMember object (6)	1	[{"added": {}}, {"added": {"name": "member social network", "object": "MemberSocialNetwork object (10)"}}]	9	1
19	2018-08-11 02:36:43.422542+00	7	TeamMember object (7)	1	[{"added": {}}, {"added": {"name": "member social network", "object": "MemberSocialNetwork object (11)"}}]	9	1
20	2018-08-11 02:37:36.75169+00	8	TeamMember object (8)	1	[{"added": {}}, {"added": {"name": "member social network", "object": "MemberSocialNetwork object (12)"}}]	9	1
21	2018-08-11 02:38:33.866338+00	9	TeamMember object (9)	1	[{"added": {}}, {"added": {"name": "member social network", "object": "MemberSocialNetwork object (13)"}}, {"added": {"name": "member social network", "object": "MemberSocialNetwork object (14)"}}]	9	1
22	2018-08-11 02:40:30.465635+00	3	cloexplorer.org	1	[{"added": {}}]	10	1
23	2018-08-11 02:42:14.948464+00	3	coinfoundry.org	1	[{"added": {}}]	11	1
24	2018-08-11 02:42:27.291182+00	4	2miners.com	1	[{"added": {}}]	11	1
25	2018-08-11 02:42:38.284704+00	5	callistopool.org	1	[{"added": {}}]	11	1
26	2018-08-11 02:42:53.810615+00	6	callisto-pool.com	1	[{"added": {}}]	11	1
27	2018-08-11 02:43:12.714442+00	7	solopool.org	1	[{"added": {}}]	11	1
28	2018-08-11 02:43:26.701079+00	8	mole-pool.net	1	[{"added": {}}]	11	1
29	2018-08-11 02:43:42.213966+00	9	clona.ru	1	[{"added": {}}]	11	1
30	2018-08-11 02:43:52.264621+00	10	minerpool.net	1	[{"added": {}}]	11	1
31	2018-08-11 02:44:04.3717+00	11	clopool.net	1	[{"added": {}}]	11	1
32	2018-08-11 02:44:15.703405+00	12	comining.io	1	[{"added": {}}]	11	1
33	2018-08-11 02:44:28.747397+00	13	clo.pool.sexy	1	[{"added": {}}]	11	1
34	2018-08-11 02:44:41.516413+00	14	pool.baikalmine.com	1	[{"added": {}}]	11	1
35	2018-08-11 02:44:58.359535+00	15	pplns.io	1	[{"added": {}}]	11	1
36	2018-08-11 02:45:09.77836+00	16	vvpool.com	1	[{"added": {}}]	11	1
37	2018-08-11 02:45:26.978272+00	17	clo.topmining.co.kr	1	[{"added": {}}]	11	1
38	2018-08-11 02:48:10.108698+00	1	Windows	2	[{"changed": {"fields": ["icon"]}}]	12	1
39	2018-08-11 02:49:24.973065+00	2	OSX	1	[{"added": {}}, {"added": {"name": "wallet", "object": "Geth - OSX"}}, {"added": {"name": "wallet", "object": "Guarda - OSX"}}, {"added": {"name": "wallet", "object": "MyCrypto - OSX"}}]	12	1
40	2018-08-11 02:50:14.351593+00	3	Linux	1	[{"added": {}}, {"added": {"name": "wallet", "object": "Geth - Linux"}}, {"added": {"name": "wallet", "object": "Parity - Linux"}}, {"added": {"name": "wallet", "object": "Guarda - Linux"}}, {"added": {"name": "wallet", "object": "MyCrypto - Linux"}}]	12	1
41	2018-08-11 02:50:57.73608+00	4	Android	1	[{"added": {}}, {"added": {"name": "wallet", "object": "Coinomi - Android"}}, {"added": {"name": "wallet", "object": "Guarda - Android"}}, {"added": {"name": "wallet", "object": "Trust Wallet - Android"}}]	12	1
42	2018-08-11 02:51:39.815992+00	5	iOS	1	[{"added": {}}, {"added": {"name": "wallet", "object": "Coinomi - iOS"}}, {"added": {"name": "wallet", "object": "Guarda - iOS"}}, {"added": {"name": "wallet", "object": "Trust Wallet - iOS"}}]	12	1
43	2018-08-11 02:52:23.922507+00	6	Web	1	[{"added": {}}, {"added": {"name": "wallet", "object": "Classic Ether Wallet - Web"}}, {"added": {"name": "wallet", "object": "Guarda - Web"}}, {"added": {"name": "wallet", "object": "MyCrypto - Web"}}]	12	1
44	2018-08-11 02:54:16.495455+00	1	BiteBTC	2	[{"changed": {"fields": ["logo"]}}]	14	1
45	2018-08-11 02:54:55.204988+00	2	Stocks Exchange	1	[{"added": {}}]	14	1
46	2018-08-11 02:57:11.488036+00	3	OOOBTC	1	[{"added": {}}]	14	1
47	2018-08-11 02:57:29.293281+00	4	Exrates	1	[{"added": {}}]	14	1
48	2018-08-11 02:57:55.760818+00	5	Antriex	1	[{"added": {}}]	14	1
49	2018-08-11 02:58:24.224106+00	6	Kairex	1	[{"added": {}}]	14	1
50	2018-08-11 03:01:51.626062+00	7	HitBTC	1	[{"added": {}}]	14	1
51	2018-08-12 21:41:51.797648+00	2	Email	2	[{"changed": {"fields": ["icon"]}}]	8	1
52	2018-08-12 21:42:03.898349+00	1	Github	2	[{"changed": {"fields": ["icon"]}}]	8	1
53	2018-08-12 21:42:21.908345+00	3	Twitter	1	[{"added": {}}]	8	1
54	2018-08-12 21:42:43.088664+00	4	Telegram	1	[{"added": {}}]	8	1
55	2018-08-12 21:42:45.9749+00	4	Telegram	2	[]	8	1
56	2018-08-12 21:42:59.892291+00	5	LinkedIn	1	[{"added": {}}]	8	1
57	2018-08-12 21:43:11.327274+00	6	Bitcoin	1	[{"added": {}}]	8	1
58	2018-08-12 21:43:39.970097+00	7	Instagram	1	[{"added": {}}]	8	1
115	2018-09-16 21:34:17.371186+00	8	TeamMember object (8)	2	[]	9	2
116	2018-09-16 21:34:21.96943+00	7	TeamMember object (7)	2	[]	9	2
117	2018-09-16 21:34:34.805228+00	6	TeamMember object (6)	2	[]	9	2
59	2018-08-12 21:45:13.18173+00	1	TeamMember object (1)	2	[{"added": {"name": "member social network", "object": "MemberSocialNetwork object (15)"}}, {"added": {"name": "member social network", "object": "MemberSocialNetwork object (16)"}}, {"added": {"name": "member social network", "object": "MemberSocialNetwork object (17)"}}, {"added": {"name": "member social network", "object": "MemberSocialNetwork object (18)"}}]	9	1
60	2018-08-12 21:46:02.837877+00	3	TeamMember object (3)	2	[{"added": {"name": "member social network", "object": "MemberSocialNetwork object (19)"}}, {"added": {"name": "member social network", "object": "MemberSocialNetwork object (20)"}}, {"added": {"name": "member social network", "object": "MemberSocialNetwork object (21)"}}]	9	1
61	2018-08-12 21:46:36.420777+00	4	TeamMember object (4)	2	[{"added": {"name": "member social network", "object": "MemberSocialNetwork object (22)"}}, {"added": {"name": "member social network", "object": "MemberSocialNetwork object (23)"}}]	9	1
62	2018-08-12 21:47:05.430642+00	5	TeamMember object (5)	2	[{"added": {"name": "member social network", "object": "MemberSocialNetwork object (24)"}}, {"added": {"name": "member social network", "object": "MemberSocialNetwork object (25)"}}]	9	1
63	2018-08-12 21:47:47.951983+00	6	TeamMember object (6)	2	[{"added": {"name": "member social network", "object": "MemberSocialNetwork object (26)"}}, {"added": {"name": "member social network", "object": "MemberSocialNetwork object (27)"}}]	9	1
64	2018-08-12 21:48:05.589473+00	7	TeamMember object (7)	2	[{"added": {"name": "member social network", "object": "MemberSocialNetwork object (28)"}}]	9	1
65	2018-08-12 21:48:33.035217+00	8	TeamMember object (8)	2	[{"added": {"name": "member social network", "object": "MemberSocialNetwork object (29)"}}, {"added": {"name": "member social network", "object": "MemberSocialNetwork object (30)"}}]	9	1
66	2018-08-12 21:48:48.825534+00	9	TeamMember object (9)	2	[{"added": {"name": "member social network", "object": "MemberSocialNetwork object (31)"}}]	9	1
67	2018-08-15 23:22:49.878736+00	2	sampol18	1	[{"added": {}}]	4	1
68	2018-08-15 23:23:56.613948+00	2	sampol18	2	[{"changed": {"fields": ["first_name", "last_name", "email", "is_staff", "is_superuser"]}}]	4	1
69	2018-08-15 23:25:11.070111+00	3	yograterol	1	[{"added": {}}]	4	1
70	2018-08-15 23:25:57.251753+00	3	yograterol	2	[{"changed": {"fields": ["first_name", "last_name", "email", "is_staff", "is_superuser"]}}]	4	1
71	2018-08-15 23:48:49.380886+00	1	gollum23	2	[{"changed": {"fields": ["first_name", "last_name"]}}]	4	1
72	2018-08-16 01:42:38.929035+00	2	sampol18	2	[{"changed": {"fields": ["email"]}}]	4	2
73	2018-08-16 01:48:31.921188+00	4	nsawinyh@callisto.network	1	[{"added": {}}]	4	2
74	2018-08-16 01:48:49.279474+00	4	nsawinyh@callisto.network	2	[{"changed": {"fields": ["email"]}}]	4	2
75	2018-08-16 22:31:09.129627+00	5	akx20000	1	[{"added": {}}]	4	2
76	2018-08-17 05:21:46.97131+00	5	akx20000	2	[{"changed": {"fields": ["is_staff"]}}]	4	2
77	2018-08-17 05:23:04.065583+00	4	nsawinyh@callisto.network	2	[{"changed": {"fields": ["is_staff", "is_superuser"]}}]	4	2
78	2018-08-17 05:24:24.339093+00	5	akx20000	2	[{"changed": {"fields": ["user_permissions"]}}]	4	2
79	2018-08-17 13:11:12.871695+00	8	Simple Swap	1	[{"added": {}}]	14	2
80	2018-08-17 13:14:09.263018+00	8	Simple Swap	3		14	2
81	2018-08-17 13:14:25.47984+00	9	Simple Swap	1	[{"added": {}}]	14	2
82	2018-08-17 13:14:58.111684+00	9	Simple Swap	2	[{"changed": {"fields": ["order"]}}]	14	2
83	2018-08-17 13:14:58.115299+00	7	HitBTC	2	[{"changed": {"fields": ["order"]}}]	14	2
84	2018-08-17 13:16:34.454785+00	10	HQEX	1	[{"added": {}}]	14	2
85	2018-08-17 13:16:43.834226+00	10	HQEX	2	[{"changed": {"fields": ["order"]}}]	14	2
86	2018-08-17 13:16:43.838302+00	7	HitBTC	2	[{"changed": {"fields": ["order"]}}]	14	2
87	2018-08-17 13:19:35.678909+00	11	Raisex	1	[{"added": {}}]	14	2
88	2018-08-17 13:19:47.208734+00	7	HitBTC	2	[{"changed": {"fields": ["order"]}}]	14	2
89	2018-08-20 14:42:00.422438+00	9	TeamMember object (9)	2	[{"changed": {"name": "member social network", "object": "MemberSocialNetwork object (14)", "fields": ["url"]}}]	9	2
90	2018-08-26 03:38:19.139748+00	1	Windows	2	[{"changed": {"name": "wallet", "object": "Geth - Windows", "fields": ["url"]}}, {"changed": {"name": "wallet", "object": "Parity - Windows", "fields": ["url"]}}]	12	3
91	2018-08-26 03:38:35.580069+00	3	Linux	2	[{"changed": {"name": "wallet", "object": "Geth - Linux", "fields": ["url"]}}, {"changed": {"name": "wallet", "object": "Parity - Linux", "fields": ["url"]}}]	12	3
92	2018-08-30 17:14:52.657053+00	4	nsawinyh@callisto.network	2	[{"changed": {"fields": ["password"]}}]	4	3
93	2018-08-30 17:17:57.706085+00	4	nsawinyh@callisto.network	2	[{"changed": {"fields": ["password"]}}]	4	2
101	2018-09-04 17:24:16.018903+00	2	OSX	2	[{"changed": {"name": "wallet", "object": "Geth - OSX", "fields": ["url"]}}]	12	2
103	2018-09-07 16:03:35.154256+00	18	clo.perspool.com	1	[{"added": {}}]	11	3
109	2018-09-15 20:57:01.806146+00	5	akx20000	3		4	2
110	2018-09-16 21:31:55.764486+00	1	TeamMember object (1)	2	[{"changed": {"fields": ["position"]}}]	9	2
111	2018-09-16 21:33:18.607337+00	2	TeamMember object (2)	2	[{"changed": {"fields": ["position"]}}]	9	2
112	2018-09-16 21:33:39.22315+00	3	TeamMember object (3)	2	[{"changed": {"fields": ["position"]}}]	9	2
113	2018-09-16 21:34:09.314791+00	5	TeamMember object (5)	2	[]	9	2
114	2018-09-16 21:34:13.647391+00	9	TeamMember object (9)	2	[]	9	2
119	2018-09-17 15:40:26.718221+00	4	nsawinyh@callisto.network	3		4	2
120	2018-09-17 15:44:11.560802+00	2	TeamMember object (2)	2	[{"changed": {"fields": ["position"]}}]	9	2
121	2018-09-17 15:44:32.306713+00	1	TeamMember object (1)	2	[]	9	2
122	2018-09-17 15:44:37.950014+00	3	TeamMember object (3)	2	[]	9	2
123	2018-09-17 15:44:43.030288+00	6	TeamMember object (6)	2	[]	9	2
124	2018-09-17 15:44:47.395817+00	5	TeamMember object (5)	2	[]	9	2
125	2018-09-17 15:44:52.989855+00	7	TeamMember object (7)	2	[]	9	2
126	2018-09-17 15:44:56.869022+00	8	TeamMember object (8)	2	[]	9	2
127	2018-09-17 15:45:00.065699+00	9	TeamMember object (9)	2	[]	9	2
128	2018-09-17 15:50:22.490915+00	12	TeamMember object (12)	1	[{"added": {}}, {"added": {"name": "member social network", "object": "MemberSocialNetwork object (38)"}}, {"added": {"name": "member social network", "object": "MemberSocialNetwork object (39)"}}]	9	2
129	2018-09-17 15:50:57.289845+00	2	TeamMember object (2)	2	[{"changed": {"fields": ["avatar"]}}]	9	2
130	2018-09-17 15:52:08.52742+00	12	TeamMember object (12)	2	[{"changed": {"fields": ["avatar"]}}]	9	2
131	2018-09-17 15:53:33.101778+00	7	TeamMember object (7)	2	[{"changed": {"fields": ["avatar"]}}]	9	2
132	2018-09-17 15:53:43.352524+00	1	TeamMember object (1)	2	[{"changed": {"fields": ["avatar"]}}]	9	2
133	2018-09-17 15:53:59.547867+00	5	TeamMember object (5)	2	[{"changed": {"fields": ["avatar"]}}]	9	2
134	2018-09-17 15:54:10.525784+00	9	TeamMember object (9)	2	[{"changed": {"fields": ["avatar"]}}]	9	2
135	2018-09-17 15:55:03.25821+00	12	TeamMember object (12)	2	[{"added": {"name": "member social network", "object": "MemberSocialNetwork object (40)"}}]	9	2
136	2018-09-17 15:57:02.958393+00	8	TeamMember object (8)	2	[{"changed": {"fields": ["avatar"]}}]	9	2
137	2018-09-17 15:58:22.729542+00	9	TeamMember object (9)	2	[]	9	2
138	2018-09-17 15:58:28.909362+00	8	TeamMember object (8)	2	[]	9	2
139	2018-09-17 15:58:34.216808+00	7	TeamMember object (7)	2	[]	9	2
140	2018-09-17 15:58:39.808409+00	6	TeamMember object (6)	2	[]	9	2
141	2018-09-17 15:58:55.843323+00	5	TeamMember object (5)	2	[]	9	2
142	2018-09-17 15:59:04.638253+00	12	TeamMember object (12)	2	[]	9	2
143	2018-09-17 15:59:11.814968+00	2	TeamMember object (2)	2	[]	9	2
144	2018-09-17 15:59:16.438722+00	3	TeamMember object (3)	2	[]	9	2
145	2018-09-17 15:59:20.125226+00	1	TeamMember object (1)	2	[]	9	2
146	2018-09-17 15:59:42.017683+00	9	TeamMember object (9)	2	[]	9	2
147	2018-09-17 15:59:46.221868+00	8	TeamMember object (8)	2	[]	9	2
148	2018-09-17 15:59:50.288521+00	7	TeamMember object (7)	2	[]	9	2
149	2018-09-17 15:59:56.335087+00	5	TeamMember object (5)	2	[]	9	2
150	2018-09-17 16:00:08.649698+00	1	TeamMember object (1)	2	[]	9	2
151	2018-09-17 16:00:22.205152+00	1	TeamMember object (1)	2	[]	9	2
152	2018-09-17 16:00:30.176875+00	7	TeamMember object (7)	2	[]	9	2
153	2018-09-17 16:00:37.976324+00	3	TeamMember object (3)	2	[]	9	2
154	2018-09-17 16:00:47.586433+00	5	TeamMember object (5)	2	[]	9	2
155	2018-09-17 16:00:57.488727+00	3	TeamMember object (3)	2	[]	9	2
156	2018-09-17 16:01:09.14088+00	2	TeamMember object (2)	2	[]	9	2
157	2018-09-17 16:03:14.868398+00	9	TeamMember object (9)	2	[]	9	2
158	2018-09-17 16:03:29.980905+00	8	TeamMember object (8)	2	[]	9	2
159	2018-09-17 16:03:35.176215+00	7	TeamMember object (7)	2	[]	9	2
160	2018-09-17 16:03:45.391781+00	6	TeamMember object (6)	2	[]	9	2
161	2018-09-17 16:03:52.124936+00	5	TeamMember object (5)	2	[]	9	2
162	2018-09-17 16:06:32.254672+00	5	TeamMember object (5)	2	[]	9	2
163	2018-09-18 23:19:18.56519+00	1	TeamMember object (1)	2	[{"changed": {"fields": ["order"]}}]	9	1
164	2018-09-18 23:19:33.73859+00	3	TeamMember object (3)	2	[{"changed": {"fields": ["order"]}}]	9	1
165	2018-09-18 23:19:56.586115+00	2	TeamMember object (2)	2	[{"changed": {"fields": ["order"]}}]	9	1
166	2018-09-18 23:20:43.071262+00	8	TeamMember object (8)	2	[{"changed": {"fields": ["order"]}}]	9	1
167	2018-09-18 23:24:52.905344+00	7	TeamMember object (7)	2	[{"changed": {"fields": ["order"]}}]	9	1
168	2018-09-18 23:25:12.694098+00	5	TeamMember object (5)	2	[{"changed": {"fields": ["order"]}}]	9	1
169	2018-09-18 23:26:15.767108+00	9	TeamMember object (9)	2	[{"changed": {"fields": ["order"]}}]	9	1
170	2018-09-18 23:27:28.613485+00	12	TeamMember object (12)	2	[{"changed": {"fields": ["order"]}}]	9	1
171	2018-09-18 23:27:36.825401+00	6	TeamMember object (6)	2	[{"changed": {"fields": ["order"]}}]	9	1
172	2018-09-18 23:28:03.97716+00	6	TeamMember object (6)	2	[{"changed": {"fields": ["order"]}}]	9	1
173	2018-09-18 23:28:12.718325+00	6	TeamMember object (6)	2	[{"changed": {"fields": ["order"]}}]	9	1
174	2018-09-19 18:57:55.504271+00	8	TeamMember object (8)	2	[{"changed": {"fields": ["position"]}}, {"changed": {"name": "member social network", "object": "MemberSocialNetwork object (12)", "fields": ["url"]}}]	9	2
175	2018-09-19 18:59:04.538159+00	9	TeamMember object (9)	2	[{"changed": {"fields": ["position"]}}]	9	2
176	2018-09-19 20:06:40.487511+00	8	TeamMember object (8)	2	[{"changed": {"fields": ["position"]}}]	9	2
177	2018-09-21 16:47:20.801138+00	6	Web	2	[{"changed": {"name": "wallet", "object": "Classic Ether Wallet - Web", "fields": ["url"]}}]	12	2
178	2018-09-21 20:56:34.05355+00	9	TeamMember object (9)	2	[{"changed": {"fields": ["bio"]}}]	9	2
179	2018-09-21 20:56:51.709234+00	3	TeamMember object (3)	2	[{"changed": {"fields": ["bio"]}}]	9	2
180	2018-09-21 21:10:14.033505+00	13	TeamMember object (13)	1	[{"added": {}}, {"added": {"name": "member social network", "object": "MemberSocialNetwork object (41)"}}, {"added": {"name": "member social network", "object": "MemberSocialNetwork object (42)"}}, {"added": {"name": "member social network", "object": "MemberSocialNetwork object (43)"}}, {"added": {"name": "member social network", "object": "MemberSocialNetwork object (44)"}}, {"added": {"name": "member social network", "object": "MemberSocialNetwork object (45)"}}]	9	2
181	2018-09-21 21:10:46.976285+00	1	TeamMember object (1)	2	[{"changed": {"fields": ["bio"]}}]	9	2
182	2018-09-21 21:14:42.331739+00	13	TeamMember object (13)	2	[{"changed": {"fields": ["avatar"]}}]	9	2
183	2018-09-21 21:17:07.785687+00	13	TeamMember object (13)	2	[{"changed": {"fields": ["avatar"]}}]	9	2
184	2018-09-21 21:19:41.231992+00	13	TeamMember object (13)	2	[{"changed": {"fields": ["avatar"]}}]	9	2
185	2018-09-24 17:51:41.334308+00	7	TeamMember object (7)	3		9	2
186	2018-09-24 18:41:07.140173+00	12	Sistemkoin	1	[{"added": {}}]	14	2
187	2018-09-24 18:41:19.393656+00	12	Sistemkoin	2	[{"changed": {"fields": ["order"]}}]	14	2
188	2018-09-24 18:41:19.399022+00	7	HitBTC	2	[{"changed": {"fields": ["order"]}}]	14	2
189	2018-09-24 18:48:10.7843+00	12	Sistemkoin	2	[{"changed": {"fields": ["logo"]}}]	14	2
190	2018-09-24 19:03:38.899083+00	12	Sistemkoin	2	[{"changed": {"fields": ["logo"]}}]	14	2
191	2018-09-26 16:02:11.44128+00	2	Stex	2	[{"changed": {"fields": ["name", "logo", "url"]}}]	14	2
192	2018-09-27 12:38:20.046102+00	21	clopool.pro	1	[{"added": {}}]	11	3
193	2018-09-27 12:52:33.201515+00	11	clopool.net	3		11	3
194	2018-09-27 12:52:33.205472+00	6	callisto-pool.com	3		11	3
195	2018-09-27 12:52:33.207278+00	3	coinfoundry.org	3		11	3
196	2018-09-30 16:47:39.627709+00	6	pm	1	[{"added": {}}]	4	2
197	2018-09-30 16:48:31.316383+00	6	pm	2	[{"changed": {"fields": ["email", "user_permissions"]}}]	4	2
198	2018-09-30 16:53:00.552806+00	6	pm	2	[{"changed": {"fields": ["is_staff"]}}]	4	2
199	2018-09-30 16:54:44.453274+00	22	HashCity	1	[{"added": {}}]	11	6
200	2018-09-30 16:55:30.258713+00	22	HashCity.org	2	[{"changed": {"fields": ["name"]}}]	11	6
201	2018-09-30 16:59:23.572645+00	6	pm	2	[{"changed": {"fields": ["first_name", "last_name"]}}]	4	6
202	2018-10-07 01:43:49.964671+00	8	TeamMember object (8)	2	[{"changed": {"fields": ["order"]}}]	9	2
203	2018-10-07 01:43:58.469187+00	12	TeamMember object (12)	2	[{"changed": {"fields": ["position", "order"]}}]	9	2
204	2018-10-07 01:44:37.220873+00	12	TeamMember object (12)	2	[{"changed": {"fields": ["position"]}}]	9	2
205	2018-10-07 01:44:58.734029+00	9	TeamMember object (9)	2	[{"changed": {"fields": ["order"]}}]	9	2
206	2018-10-07 01:45:24.791252+00	5	TeamMember object (5)	2	[{"changed": {"fields": ["order"]}}]	9	2
207	2018-10-07 01:45:34.516472+00	6	TeamMember object (6)	2	[{"changed": {"fields": ["order"]}}]	9	2
208	2018-10-07 01:46:08.16118+00	5	TeamMember object (5)	2	[{"changed": {"fields": ["order"]}}]	9	2
209	2018-10-07 01:46:13.751967+00	8	TeamMember object (8)	2	[{"changed": {"fields": ["order"]}}]	9	2
210	2018-10-07 01:46:34.604397+00	13	TeamMember object (13)	2	[{"changed": {"fields": ["order"]}}]	9	2
211	2018-10-09 07:58:26.416168+00	11	Raisex	3		14	6
212	2018-10-09 16:34:10.592597+00	12	Sistemkoin	2	[{"changed": {"fields": ["order"]}}]	14	6
213	2018-10-09 16:34:10.627627+00	9	Simple Swap	2	[{"changed": {"fields": ["order"]}}]	14	6
214	2018-10-09 16:34:10.631775+00	6	Kairex	2	[{"changed": {"fields": ["order"]}}]	14	6
215	2018-10-09 16:34:10.635642+00	5	Antriex	2	[{"changed": {"fields": ["order"]}}]	14	6
216	2018-10-09 16:34:10.639915+00	4	Exrates	2	[{"changed": {"fields": ["order"]}}]	14	6
217	2018-10-09 16:34:10.643645+00	3	OOOBTC	2	[{"changed": {"fields": ["order"]}}]	14	6
218	2018-10-09 16:34:10.647352+00	2	Stex	2	[{"changed": {"fields": ["order"]}}]	14	6
219	2018-10-10 03:15:26.266031+00	2	Stex	2	[{"changed": {"fields": ["url"]}}]	14	2
220	2018-10-10 03:17:26.330605+00	2	Stex	2	[]	14	2
221	2018-10-14 06:41:09.073767+00	23	cryptomena.io	1	[{"added": {}}]	11	2
222	2018-10-14 06:42:34.484707+00	24	cryptodig.ru	1	[{"added": {}}]	11	2
223	2018-10-14 07:28:11.052609+00	25	cryptomena.io	1	[{"added": {}}]	11	6
224	2018-10-14 07:29:47.617789+00	26	cryptodig.ru | SOLO	1	[{"added": {}}]	11	6
225	2018-10-14 07:31:30.239282+00	25	cryptomena.io	3		11	6
226	2018-10-14 07:31:30.24206+00	24	cryptodig.ru	3		11	6
227	2018-10-15 16:00:39.91649+00	10	HQEX	3		14	2
228	2018-10-15 16:00:39.944233+00	6	Kairex	3		14	2
229	2018-10-15 16:00:39.953593+00	5	Antriex	3		14	2
230	2018-10-15 16:00:39.968086+00	4	Exrates	3		14	2
231	2018-10-15 16:00:39.982801+00	3	OOOBTC	3		14	2
232	2018-10-16 13:34:47.071533+00	27	uleypool.com	1	[{"added": {}}]	11	2
233	2018-10-17 13:23:17.677805+00	6	TeamMember object (6)	3		9	2
234	2018-10-23 19:34:33.160882+00	2	Stex	2	[{"changed": {"fields": ["logo"]}}]	14	2
235	2018-10-23 19:34:38.804194+00	2	Stex	2	[]	14	2
236	2018-10-26 21:37:51.760065+00	13	Idax	1	[{"added": {}}]	14	2
237	2018-10-28 17:05:13.807516+00	28	clo.drunkenpool.me	1	[{"added": {}}]	11	2
238	2018-10-29 12:57:33.015637+00	27	uleypool.com	2	[{"changed": {"fields": ["url"]}}]	11	2
239	2018-11-02 20:56:25.114198+00	13	Idax	2	[{"changed": {"fields": ["order"]}}]	14	2
240	2018-11-02 20:56:25.128235+00	2	Stex	2	[{"changed": {"fields": ["order"]}}]	14	2
241	2018-11-02 20:59:41.848451+00	13	Idax	2	[{"changed": {"fields": ["coming_soon"]}}]	14	2
242	2018-11-02 21:03:43.890789+00	13	Idax	2	[{"changed": {"fields": ["logo"]}}]	14	2
243	2018-11-18 16:56:19.88152+00	7	walis85300	1	[{"added": {}}]	4	2
244	2018-11-18 16:56:56.686477+00	7	walis85300	2	[{"changed": {"fields": ["first_name", "last_name", "email", "is_staff", "is_superuser", "last_login"]}}]	4	2
245	2018-11-20 16:00:37.884171+00	13	TeamMember object (13)	3		9	6
246	2018-11-20 18:40:36.426495+00	6	pm	2	[{"changed": {"fields": ["is_staff"]}}]	4	2
247	2018-11-20 18:40:44.199406+00	6	pm	2	[{"changed": {"fields": ["user_permissions"]}}]	4	2
248	2018-11-20 18:41:28.713001+00	29	pool.baikalmine.com	1	[{"added": {}}]	11	2
249	2018-11-20 18:42:23.419245+00	30	pool.baikalmine.clo-solo	1	[{"added": {}}]	11	2
250	2018-11-20 18:42:37.286115+00	30	pool.baikalmine.clo	2	[{"changed": {"fields": ["name"]}}]	11	2
251	2018-11-24 17:27:33.391192+00	12	Sistemkoin	2	[{"changed": {"fields": ["order"]}}]	14	2
252	2018-11-24 17:27:33.397873+00	9	Simple Swap	2	[{"changed": {"fields": ["order"]}}]	14	2
253	2018-11-24 17:27:39.520121+00	14	Dobitrade	1	[{"added": {}}]	14	2
254	2018-11-28 19:24:12.58341+00	12	TeamMember object (12)	2	[{"changed": {"fields": ["position"]}}, {"added": {"name": "member social network", "object": "MemberSocialNetwork object (46)"}}, {"changed": {"name": "member social network", "object": "MemberSocialNetwork object (38)", "fields": ["url"]}}]	9	2
\.


--
-- Data for Name: django_content_type; Type: TABLE DATA; Schema: public; Owner: callisto
--

COPY public.django_content_type (id, app_label, model) FROM stdin;
1	admin	logentry
2	auth	permission
3	auth	group
4	auth	user
5	contenttypes	contenttype
6	sessions	session
7	team	membersocialnetwork
8	team	socialnetwork
9	team	teammember
10	mining	blockexplorer
11	mining	miningpool
12	wallets	walletplatform
13	wallets	wallet
14	exchanges	exchange
\.


--
-- Data for Name: django_migrations; Type: TABLE DATA; Schema: public; Owner: callisto
--

COPY public.django_migrations (id, app, name, applied) FROM stdin;
1	contenttypes	0001_initial	2018-08-07 03:11:19.990528+00
2	auth	0001_initial	2018-08-07 03:11:20.215497+00
3	admin	0001_initial	2018-08-07 03:11:20.253745+00
4	admin	0002_logentry_remove_auto_add	2018-08-07 03:11:20.265538+00
5	admin	0003_logentry_add_action_flag_choices	2018-08-07 03:11:20.27638+00
6	contenttypes	0002_remove_content_type_name	2018-08-07 03:11:20.303614+00
7	auth	0002_alter_permission_name_max_length	2018-08-07 03:11:20.311539+00
8	auth	0003_alter_user_email_max_length	2018-08-07 03:11:20.32436+00
9	auth	0004_alter_user_username_opts	2018-08-07 03:11:20.333801+00
10	auth	0005_alter_user_last_login_null	2018-08-07 03:11:20.345288+00
11	auth	0006_require_contenttypes_0002	2018-08-07 03:11:20.347764+00
12	auth	0007_alter_validators_add_error_messages	2018-08-07 03:11:20.357157+00
13	auth	0008_alter_user_username_max_length	2018-08-07 03:11:20.372592+00
14	auth	0009_alter_user_last_name_max_length	2018-08-07 03:11:20.385964+00
15	sessions	0001_initial	2018-08-07 03:11:20.436017+00
16	team	0001_initial	2018-08-07 03:11:20.523043+00
17	mining	0001_initial	2018-08-07 13:36:42.705691+00
18	wallets	0001_initial	2018-08-08 00:26:08.879655+00
19	exchanges	0001_initial	2018-08-09 00:38:27.524396+00
20	exchanges	0002_auto_20180809_0049	2018-08-09 00:49:06.435483+00
21	exchanges	0003_auto_20180809_0121	2018-08-09 01:21:59.610458+00
22	exchanges	0004_exchange_coming_soon	2018-08-11 03:00:08.897683+00
23	team	0002_teammember_order	2018-09-18 23:15:40.597049+00
24	wallets	0002_wallet_cold_staking	2018-11-18 17:00:09.801315+00
\.


--
-- Data for Name: django_session; Type: TABLE DATA; Schema: public; Owner: callisto
--

COPY public.django_session (session_key, session_data, expire_date) FROM stdin;
cwjajr3fp3rjdq6y2o587iwy298nf74x	NDI0N2I3Y2ZmNTE5MzI2YjBkOTg4Njg0MWJjYzNkNzM0ZGVmYTA4NTp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiI4NDNhZDQ2NGI3NjczZDI1NDkwYWM4ODk4MGY5OWNmNjgxMmEwYzVmIn0=	2018-08-22 00:49:39.513871+00
59qgf8sqbr2v5f3chc8uvrv6hxr5ipwk	ZjRkNWVmMDFmYWMxY2U3OTQxYTIwNWExNTZmNjdmZmFhN2EzOTc1NTp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJiNDc2MGI4YjdmN2YzMDgyZTRkYjY5MWI3YjUwYjMwNjQ3NDljYTEzIn0=	2018-08-29 23:20:06.920259+00
5zdk6nmk2ucg34bn6zufqdoiby3jlh3y	NzcyN2MyOGFlZDA3YTdlOGIzNWVlNzYyYTUyM2FhNjQzNjhhYTc3ZDp7Il9hdXRoX3VzZXJfaWQiOiIyIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiI0NGIyNjhkNDNiZGI5OWRhMTQ3MGExMWE5MTk4ZmU5OTFhMzIzZjE4In0=	2018-08-29 23:24:25.693455+00
v5uer6mraf9o6wmi2dhgw1wrza713o6n	MjA3MmE0MGU5ODRjMDQxOWZlYmYxYzAyODdkMTA5YTE3MjU1Mjc1MDp7Il9hdXRoX3VzZXJfaWQiOiI1IiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiIxNTZkYWNiODhmMDAwMjJhMTM1OGE4N2NkMTNiMDc1ZmU2NTFhNDBkIn0=	2018-08-31 09:16:23.864478+00
mca5e70owa1jjuvhwvnzyhdo78npaddn	NzcyN2MyOGFlZDA3YTdlOGIzNWVlNzYyYTUyM2FhNjQzNjhhYTc3ZDp7Il9hdXRoX3VzZXJfaWQiOiIyIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiI0NGIyNjhkNDNiZGI5OWRhMTQ3MGExMWE5MTk4ZmU5OTFhMzIzZjE4In0=	2018-09-03 14:41:30.79487+00
3ft08o98wghf4myeh5nfcapd33kiwfz1	M2Q1ZjY4NDc1YTUxZTVlNTkwN2EwZTc4OWVjNjcyMzA5YjIzNGM4Mjp7Il9hdXRoX3VzZXJfaWQiOiIzIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJmYjk0ODA1OTE1MzUxYzBjMDBlOTU4ODdjY2RjYWU4NGRmYjhlYjlhIn0=	2018-09-13 17:14:52.665445+00
097vmj4ethx2vp0ds656v7r9djcwz3zr	NzcyN2MyOGFlZDA3YTdlOGIzNWVlNzYyYTUyM2FhNjQzNjhhYTc3ZDp7Il9hdXRoX3VzZXJfaWQiOiIyIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiI0NGIyNjhkNDNiZGI5OWRhMTQ3MGExMWE5MTk4ZmU5OTFhMzIzZjE4In0=	2018-09-13 17:17:57.718736+00
2dyushdbkawvn90fx0ys1d0q5rd3cvgy	YjRjZTZmN2FhMzMyYThhNjUyY2MxOWJmZDlmNDEwM2NiOWYyZWYzNTp7Il9hdXRoX3VzZXJfaWQiOiI0IiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiI2ZDlmOTFmMmRhYThiNzc4ZWU5ZGFjOTM2NjJjZDgxMDNlMTkzNjZiIn0=	2018-09-13 17:22:44.243667+00
fredqdqitvn1t68zx5d2ioptxgj41dar	NzcyN2MyOGFlZDA3YTdlOGIzNWVlNzYyYTUyM2FhNjQzNjhhYTc3ZDp7Il9hdXRoX3VzZXJfaWQiOiIyIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiI0NGIyNjhkNDNiZGI5OWRhMTQ3MGExMWE5MTk4ZmU5OTFhMzIzZjE4In0=	2018-09-14 00:50:00.509279+00
z4qnoo59gtj9a3tishhgj82960q6i8gt	NzcyN2MyOGFlZDA3YTdlOGIzNWVlNzYyYTUyM2FhNjQzNjhhYTc3ZDp7Il9hdXRoX3VzZXJfaWQiOiIyIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiI0NGIyNjhkNDNiZGI5OWRhMTQ3MGExMWE5MTk4ZmU5OTFhMzIzZjE4In0=	2018-09-18 17:23:12.477453+00
n4omclnqv35twgmbtc5zlvlajrhnull7	M2Q1ZjY4NDc1YTUxZTVlNTkwN2EwZTc4OWVjNjcyMzA5YjIzNGM4Mjp7Il9hdXRoX3VzZXJfaWQiOiIzIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJmYjk0ODA1OTE1MzUxYzBjMDBlOTU4ODdjY2RjYWU4NGRmYjhlYjlhIn0=	2018-09-21 16:03:08.779514+00
1k8odsdv5lunm3tn5qqdncpt1nnlfa8y	YjRjZTZmN2FhMzMyYThhNjUyY2MxOWJmZDlmNDEwM2NiOWYyZWYzNTp7Il9hdXRoX3VzZXJfaWQiOiI0IiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiI2ZDlmOTFmMmRhYThiNzc4ZWU5ZGFjOTM2NjJjZDgxMDNlMTkzNjZiIn0=	2018-09-29 19:03:59.396703+00
oxosql97zkmovewpdfnu5ml35wgtfxks	NzcyN2MyOGFlZDA3YTdlOGIzNWVlNzYyYTUyM2FhNjQzNjhhYTc3ZDp7Il9hdXRoX3VzZXJfaWQiOiIyIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiI0NGIyNjhkNDNiZGI5OWRhMTQ3MGExMWE5MTk4ZmU5OTFhMzIzZjE4In0=	2018-09-29 20:56:41.389327+00
ofaxqd0laf3rvk5gy6inhiyw711vgv2z	MWU1MTJmN2U5ZWY3ZWJhYTkzZTBkYjcxNjJjNGI1NWU4NWFjMWUwMzp7Il9hdXRoX3VzZXJfaWQiOiIyIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJkNGJiYmVjNjdlZWNhZDFmMWM4YjViZmIzZDMzOWVkYjIzMjY5NWViIn0=	2018-10-01 15:39:42.159196+00
9k2erurgmqyhlad6yzmmckfi5qrzfjoa	MWU1MTJmN2U5ZWY3ZWJhYTkzZTBkYjcxNjJjNGI1NWU4NWFjMWUwMzp7Il9hdXRoX3VzZXJfaWQiOiIyIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJkNGJiYmVjNjdlZWNhZDFmMWM4YjViZmIzZDMzOWVkYjIzMjY5NWViIn0=	2018-10-01 15:40:17.565262+00
429uuduumiws2yhmhfc3a1byc54aklpw	YWZjZGE5MzVmMmNiYzBlYjFlODBkNzFjYTE2NDI2ZmJlZWYxNGExOTp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiI5YmI3MmZhNjBhNTUxMTcxNzIyZTYyNThjNzViMmFiMTMwZTllMmNiIn0=	2018-10-02 23:18:43.623684+00
hs0zh623pdbremqtxpdgueu5ypztwoll	MWU1MTJmN2U5ZWY3ZWJhYTkzZTBkYjcxNjJjNGI1NWU4NWFjMWUwMzp7Il9hdXRoX3VzZXJfaWQiOiIyIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJkNGJiYmVjNjdlZWNhZDFmMWM4YjViZmIzZDMzOWVkYjIzMjY5NWViIn0=	2018-10-03 18:57:30.322316+00
r6dwvaafrq5fvrlxdpfev0tkuj59mvrz	MWU1MTJmN2U5ZWY3ZWJhYTkzZTBkYjcxNjJjNGI1NWU4NWFjMWUwMzp7Il9hdXRoX3VzZXJfaWQiOiIyIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJkNGJiYmVjNjdlZWNhZDFmMWM4YjViZmIzZDMzOWVkYjIzMjY5NWViIn0=	2018-10-03 18:57:30.654208+00
umesg3o1dnha3lysgqneosczu16dsts9	MWU1MTJmN2U5ZWY3ZWJhYTkzZTBkYjcxNjJjNGI1NWU4NWFjMWUwMzp7Il9hdXRoX3VzZXJfaWQiOiIyIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJkNGJiYmVjNjdlZWNhZDFmMWM4YjViZmIzZDMzOWVkYjIzMjY5NWViIn0=	2018-10-05 16:46:53.917668+00
p0vokeuqkfxln81ym00ss2pohnl712aq	MWU1MTJmN2U5ZWY3ZWJhYTkzZTBkYjcxNjJjNGI1NWU4NWFjMWUwMzp7Il9hdXRoX3VzZXJfaWQiOiIyIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJkNGJiYmVjNjdlZWNhZDFmMWM4YjViZmIzZDMzOWVkYjIzMjY5NWViIn0=	2018-10-05 16:46:54.282848+00
vem1o15zuw2trdaegntlsf50id6u3ilp	MWU1MTJmN2U5ZWY3ZWJhYTkzZTBkYjcxNjJjNGI1NWU4NWFjMWUwMzp7Il9hdXRoX3VzZXJfaWQiOiIyIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJkNGJiYmVjNjdlZWNhZDFmMWM4YjViZmIzZDMzOWVkYjIzMjY5NWViIn0=	2018-10-08 17:51:02.124334+00
we22m9ofsnigyjekn79zx0tl726pdzda	MWU1MTJmN2U5ZWY3ZWJhYTkzZTBkYjcxNjJjNGI1NWU4NWFjMWUwMzp7Il9hdXRoX3VzZXJfaWQiOiIyIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJkNGJiYmVjNjdlZWNhZDFmMWM4YjViZmIzZDMzOWVkYjIzMjY5NWViIn0=	2018-10-10 16:01:11.713897+00
qj8bst2oqfhy151d3ixxemeo5ntaf50e	M2Q1ZjY4NDc1YTUxZTVlNTkwN2EwZTc4OWVjNjcyMzA5YjIzNGM4Mjp7Il9hdXRoX3VzZXJfaWQiOiIzIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJmYjk0ODA1OTE1MzUxYzBjMDBlOTU4ODdjY2RjYWU4NGRmYjhlYjlhIn0=	2018-10-11 12:38:05.29675+00
o84ctz2qa69gkrjfywz36rciiz4dyjw2	MWU1MTJmN2U5ZWY3ZWJhYTkzZTBkYjcxNjJjNGI1NWU4NWFjMWUwMzp7Il9hdXRoX3VzZXJfaWQiOiIyIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJkNGJiYmVjNjdlZWNhZDFmMWM4YjViZmIzZDMzOWVkYjIzMjY5NWViIn0=	2018-10-21 01:42:11.945829+00
tftohf3wemdgccnwduer0wkdmlwg7gaa	NzkxZmQxMzk3YzdjMjcwODBlNGIwMTgzMTkxMjVjNjhjYjdjYWUyYTp7Il9hdXRoX3VzZXJfaWQiOiI2IiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiIwMDM1ZjUxZDJmMzE0NzExNjdlM2E5Y2E0YWU3NzI3YjM5YzgzNzJjIn0=	2018-10-23 07:57:54.33747+00
uxcyyz2s49u6nohpoa1oel0uwd7i0z5m	MWU1MTJmN2U5ZWY3ZWJhYTkzZTBkYjcxNjJjNGI1NWU4NWFjMWUwMzp7Il9hdXRoX3VzZXJfaWQiOiIyIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJkNGJiYmVjNjdlZWNhZDFmMWM4YjViZmIzZDMzOWVkYjIzMjY5NWViIn0=	2018-10-24 03:14:39.530402+00
jmdbbb7hrp48wosmnm1omfhkmdymknw8	MWU1MTJmN2U5ZWY3ZWJhYTkzZTBkYjcxNjJjNGI1NWU4NWFjMWUwMzp7Il9hdXRoX3VzZXJfaWQiOiIyIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJkNGJiYmVjNjdlZWNhZDFmMWM4YjViZmIzZDMzOWVkYjIzMjY5NWViIn0=	2018-10-28 06:40:54.993589+00
appqzaucvqpztav18ai88winb0yovsv3	MWU1MTJmN2U5ZWY3ZWJhYTkzZTBkYjcxNjJjNGI1NWU4NWFjMWUwMzp7Il9hdXRoX3VzZXJfaWQiOiIyIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJkNGJiYmVjNjdlZWNhZDFmMWM4YjViZmIzZDMzOWVkYjIzMjY5NWViIn0=	2018-11-11 17:04:59.700983+00
wydsq4f8e97fe01jjkgry3qt718qplrw	MWU1MTJmN2U5ZWY3ZWJhYTkzZTBkYjcxNjJjNGI1NWU4NWFjMWUwMzp7Il9hdXRoX3VzZXJfaWQiOiIyIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJkNGJiYmVjNjdlZWNhZDFmMWM4YjViZmIzZDMzOWVkYjIzMjY5NWViIn0=	2018-11-12 12:55:13.381505+00
s3k6haij6l2nyqgz1w05u8zapq8g2gqe	MWU1MTJmN2U5ZWY3ZWJhYTkzZTBkYjcxNjJjNGI1NWU4NWFjMWUwMzp7Il9hdXRoX3VzZXJfaWQiOiIyIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJkNGJiYmVjNjdlZWNhZDFmMWM4YjViZmIzZDMzOWVkYjIzMjY5NWViIn0=	2018-11-16 20:56:09.81095+00
ktwjz7imo9y04c64wa7wbhv2m7pdwrqg	ODZmZmI4ZjA5NTZhYjI5NmFlYjU5MTYxMzA2ZDk0Y2RkNWJiYjQ5MTp7Il9hdXRoX3VzZXJfaWQiOiI3IiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJjNDZhNDM1MDY3NzU5ZjA4NTgzOTkwNzUwNWU1ODdhODMyNzg5YzkzIn0=	2018-12-02 16:57:16.358459+00
x7y2gt06nrryi67tyuloewn5slapxzkc	NzkxZmQxMzk3YzdjMjcwODBlNGIwMTgzMTkxMjVjNjhjYjdjYWUyYTp7Il9hdXRoX3VzZXJfaWQiOiI2IiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiIwMDM1ZjUxZDJmMzE0NzExNjdlM2E5Y2E0YWU3NzI3YjM5YzgzNzJjIn0=	2018-12-04 15:57:15.330739+00
mo8ec251qh6d67rcbz5ctthdrds6ferl	MWU1MTJmN2U5ZWY3ZWJhYTkzZTBkYjcxNjJjNGI1NWU4NWFjMWUwMzp7Il9hdXRoX3VzZXJfaWQiOiIyIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJkNGJiYmVjNjdlZWNhZDFmMWM4YjViZmIzZDMzOWVkYjIzMjY5NWViIn0=	2018-12-04 18:40:04.825901+00
43wizec60x0dg0pb7wbe0epf1ib95dgm	MWU1MTJmN2U5ZWY3ZWJhYTkzZTBkYjcxNjJjNGI1NWU4NWFjMWUwMzp7Il9hdXRoX3VzZXJfaWQiOiIyIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJkNGJiYmVjNjdlZWNhZDFmMWM4YjViZmIzZDMzOWVkYjIzMjY5NWViIn0=	2018-12-08 17:26:04.529609+00
89gdi260iw0ileawrbem4ifaw29m0e9u	MWU1MTJmN2U5ZWY3ZWJhYTkzZTBkYjcxNjJjNGI1NWU4NWFjMWUwMzp7Il9hdXRoX3VzZXJfaWQiOiIyIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJkNGJiYmVjNjdlZWNhZDFmMWM4YjViZmIzZDMzOWVkYjIzMjY5NWViIn0=	2018-12-12 19:23:36.065066+00
\.


--
-- Data for Name: exchanges_exchange; Type: TABLE DATA; Schema: public; Owner: callisto
--

COPY public.exchanges_exchange (id, name, logo, url, "order", coming_soon) FROM stdin;
7	HitBTC	image/exchanges/hitBTC.png	https://hitbtc.com/	11	t
2	Stex	image/exchanges/Logo_W.png	https://app.stex.com?ref=14019577	12	f
13	Idax	image/exchanges/idax_logo.png	https://www.idax.mn/#/	1	f
12	Sistemkoin	image/exchanges/sistemkoin.png	https://sistemkoin.com	3	f
9	Simple Swap	image/exchanges/simpleswap.png	http://simpleswap.io	4	f
14	Dobitrade	image/exchanges/2D2E0697-8D57-4677-AEE5-1E55031036E4.png	https://www.dobitrade.com	2	f
\.


--
-- Data for Name: mining_blockexplorer; Type: TABLE DATA; Schema: public; Owner: callisto
--

COPY public.mining_blockexplorer (id, name, url) FROM stdin;
1	explorer.callisto.network	https://explorer.callisto.network/
2	callistoexplorer.com	https://callistoexplorer.com/home
4	explorer2.callisto.network	https://explorer2.callisto.network
\.


--
-- Data for Name: mining_miningpool; Type: TABLE DATA; Schema: public; Owner: callisto
--

COPY public.mining_miningpool (id, name, url) FROM stdin;
2	epool.io	https://clo.epool.io/
4	2miners.com	https://clo.2miners.com/en
5	callistopool.org	http://callistopool.org/
7	solopool.org	https://clo.solopool.org/
8	mole-pool.net	http://clo.mole-pool.net:89/
9	clona.ru	http://clona.ru/
10	minerpool.net	http://clo.minerpool.net/
12	comining.io	https://comining.io/
13	clo.pool.sexy	http://clo.pool.sexy/#/
15	pplns.io	https://pplns.io/
16	vvpool.com	https://www.vvpool.com/
17	clo.topmining.co.kr	https://clo.topmining.co.kr/
18	clo.perspool.com	http://clo.perspool.com
19	clo.farmine.net	http://clo.farmine.net
20	clopool.org	https://clopool.org/
21	clopool.pro	https://clopool.pro
22	HashCity.org	https://hashcity.org
23	cryptomena.io	https://clo.cryptomena.io
26	cryptodig.ru | SOLO	http://clo-solo.cryptodig.ru/#/
28	clo.drunkenpool.me	https://clo.drunkenpool.me/
27	uleypool.com	https://uleypool.com/mining-pool-callisto-clo/
29	pool.baikalmine.com	http://pool.baikalmine.com/en/clo/
30	pool.baikalmine.clo	http://pool.baikalmine.com/en/clo-solo/
\.


--
-- Data for Name: team_membersocialnetwork; Type: TABLE DATA; Schema: public; Owner: callisto
--

COPY public.team_membersocialnetwork (id, url, active, member_id, network_id) FROM stdin;
1	https://t.me/yograterol	t	1	1
2	yograterol@callisto.network	t	1	2
3	https://github.com/Dexaran	t	2	1
4	dexaran820@gmail.com	t	2	2
5	https://github.com/sampol18/	t	3	1
6	s@protonmail.com	t	3	2
9	darwino@callisto.network	t	5	2
13	https://github.com/yuriy77k	t	9	1
15	https://twitter.com/yograterol/	t	1	3
16	https://t.me/yograterol	t	1	4
17	https://www.linkedin.com/in/yograterol/	t	1	5
18	https://bitcointalk.org/index.php?action=profile;u=1147564	t	1	6
19	https://twitter.com/sampol18/	t	3	3
20	https://t.me/sampol18	t	3	4
21	https://www.linkedin.com/in/carlossampol/	t	3	5
24	https://t.me/Darwino	t	5	4
25	https://www.instagram.com/darwinongko/	t	5	7
29	https://t.me/tiotoi	t	8	4
30	https://www.linkedin.com/in/tio-toi-192279165/	t	8	5
31	https://t.me/yuriy77k	t	9	4
14	yuri@callisto.network	t	9	2
39	https://twitter.com/CryptoGatos	t	12	3
40	https://t.me/alejomc	t	12	4
12	tio@callisto.network	t	8	2
38	a@callisto.network	t	12	2
46	https://www.linkedin.com/in/cmalejo/	t	12	5
\.


--
-- Data for Name: team_socialnetwork; Type: TABLE DATA; Schema: public; Owner: callisto
--

COPY public.team_socialnetwork (id, name, icon) FROM stdin;
2	Email	far fa-envelope
1	Github	fab fa-github
3	Twitter	fab fa-twitter
4	Telegram	fab fa-telegram-plane
5	LinkedIn	fab fa-linkedin-in
6	Bitcoin	fab fa-bitcoin
7	Instagram	fab fa-instagram
\.


--
-- Data for Name: team_teammember; Type: TABLE DATA; Schema: public; Owner: callisto
--

COPY public.team_teammember (id, avatar, name, "position", bio, "order") FROM stdin;
9	image/avatars/yuriy_avatar_YMZ7eI2.jpg	Yuriy Kharytoshyn	Head of Security Department	I’m an Information Security expert with over 18 years experience. Backend Developer (C/C++, Python, PHP, Assembler) of InfoSec related projects. Since 2016, focused on Blockchain technologies and Smart contract security. A Master of Science (M.Sc.) in Computer Science and Мathematic.	5
2	image/avatars/dexaran_avatar.jpg	Dexaran	CRO	My main specialty is information security. I’ve been an Ethereum smart-contracts developer since its first days. I created the ERC223 token standard and founded DEX ICO and the Ethereum Commonwealth. I was formerly a security auditor.	3
3	image/avatars/sampol_avatar.jpg	Carlos Sampol	CTO & Web Developer	Skilled in the Frontend development Environment with knowledge in HTML5/CSS3, Javascript (React JS) and Backend Environments with Node.js. Worked in several important startups such as Platzi and GoRead	2
1	image/avatars/yohan_avatar_ZsSMRBt.jpg	Yohan Graterol	CEO & Main Callisto Developer	Hi, I’m a backend developer (Python and Go) with over seven years of experience. I have worked for as a Head of Engineering for three years. The cryptocurrency world is my passion.	1
5	image/avatars/darwino_avatar_seYAgR3.jpg	Darwin Ongko	Callisto Community Manager & Callisto Indonesia Ambassador	I have over 8 years of experience working at a life insurance company as an agency manager for Prudential Life Assurance and 7 years at Generali Indonesia as an Agency Business Director, managing more than 4,000 people from 10 cities in Indonesia within the agency.	8
8	image/avatars/tio_avatar.jpg	Tio Toi	Head of Community	Motivated, worked as an IT project manager for over 13 years. Owner of ProffeeCa since May, 2016. Enthusiastic and loves to learn new things.	7
12	image/avatars/Alejo_avatar_HiS1JF6.jpg	Alejo Chababo	CMO & Head of Marketing	Hi, I have 10 years experience working in Marketing and Sales department. I worked both freelance and in company.  Cryptocurrency enthusiast since 2014. I've worked in the corporate image of CIKA SRL since it was founded. 100% Committed to my work.	4
\.


--
-- Data for Name: wallets_wallet; Type: TABLE DATA; Schema: public; Owner: callisto
--

COPY public.wallets_wallet (id, name, url, platform_id, cold_staking) FROM stdin;
3	Guarda	https://guarda.co/desktop/	1	f
4	MyCrypto	https://mycrypto.com/	1	f
6	Guarda	https://guarda.co/desktop/	2	f
7	MyCrypto	https://mycrypto.com/	2	f
10	Guarda	https://guarda.co/desktop/	3	f
11	MyCrypto	https://mycrypto.com/	3	f
12	Coinomi	https://coinomi.com/	4	f
13	Guarda	https://guarda.co/	4	f
14	Trust Wallet	https://trustwalletapp.com/	4	f
15	Coinomi	https://coinomi.com/	5	f
16	Guarda	https://guarda.co/	5	f
17	Trust Wallet	https://itunes.apple.com/us/app/trust-ethereum-wallet/id1288339409?mt=8	5	f
19	Guarda	https://guarda.co/	6	f
20	MyCrypto	https://mycrypto.com/	6	f
1	Geth	https://github.com/EthereumCommonwealth/go-callisto	1	f
2	Parity	https://github.com/EthereumCommonwealth/rust-callisto	1	f
8	Geth	https://github.com/EthereumCommonwealth/go-callisto	3	f
9	Parity	https://github.com/EthereumCommonwealth/rust-callisto	3	f
5	Geth	https://github.com/EthereumCommonwealth/go-callisto	2	f
18	Classic Ether Wallet	https://wallet.callisto.network/	6	f
\.


--
-- Data for Name: wallets_walletplatform; Type: TABLE DATA; Schema: public; Owner: callisto
--

COPY public.wallets_walletplatform (id, name, icon) FROM stdin;
4	Android	image/wallets/playstore.svg
5	iOS	image/wallets/applestore.svg
1	Windows	image/wallets/windows.svg
3	Linux	image/wallets/linux.svg
2	OSX	image/wallets/apple.svg
6	Web	image/wallets/web.svg
\.


--
-- Name: auth_group_id_seq; Type: SEQUENCE SET; Schema: public; Owner: callisto
--

SELECT pg_catalog.setval('public.auth_group_id_seq', 1, false);


--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: callisto
--

SELECT pg_catalog.setval('public.auth_group_permissions_id_seq', 1, false);


--
-- Name: auth_permission_id_seq; Type: SEQUENCE SET; Schema: public; Owner: callisto
--

SELECT pg_catalog.setval('public.auth_permission_id_seq', 56, true);


--
-- Name: auth_user_groups_id_seq; Type: SEQUENCE SET; Schema: public; Owner: callisto
--

SELECT pg_catalog.setval('public.auth_user_groups_id_seq', 1, false);


--
-- Name: auth_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: callisto
--

SELECT pg_catalog.setval('public.auth_user_id_seq', 7, true);


--
-- Name: auth_user_user_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: callisto
--

SELECT pg_catalog.setval('public.auth_user_user_permissions_id_seq', 100, true);


--
-- Name: django_admin_log_id_seq; Type: SEQUENCE SET; Schema: public; Owner: callisto
--

SELECT pg_catalog.setval('public.django_admin_log_id_seq', 254, true);


--
-- Name: django_content_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: callisto
--

SELECT pg_catalog.setval('public.django_content_type_id_seq', 14, true);


--
-- Name: django_migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: callisto
--

SELECT pg_catalog.setval('public.django_migrations_id_seq', 24, true);


--
-- Name: exchanges_exchange_id_seq; Type: SEQUENCE SET; Schema: public; Owner: callisto
--

SELECT pg_catalog.setval('public.exchanges_exchange_id_seq', 14, true);


--
-- Name: mining_blockexplorer_id_seq; Type: SEQUENCE SET; Schema: public; Owner: callisto
--

SELECT pg_catalog.setval('public.mining_blockexplorer_id_seq', 4, true);


--
-- Name: mining_miningpool_id_seq; Type: SEQUENCE SET; Schema: public; Owner: callisto
--

SELECT pg_catalog.setval('public.mining_miningpool_id_seq', 30, true);


--
-- Name: team_membersocialnetwork_id_seq; Type: SEQUENCE SET; Schema: public; Owner: callisto
--

SELECT pg_catalog.setval('public.team_membersocialnetwork_id_seq', 46, true);


--
-- Name: team_socialnetwork_id_seq; Type: SEQUENCE SET; Schema: public; Owner: callisto
--

SELECT pg_catalog.setval('public.team_socialnetwork_id_seq', 7, true);


--
-- Name: team_teammember_id_seq; Type: SEQUENCE SET; Schema: public; Owner: callisto
--

SELECT pg_catalog.setval('public.team_teammember_id_seq', 13, true);


--
-- Name: wallets_wallet_id_seq; Type: SEQUENCE SET; Schema: public; Owner: callisto
--

SELECT pg_catalog.setval('public.wallets_wallet_id_seq', 20, true);


--
-- Name: wallets_walletplatform_id_seq; Type: SEQUENCE SET; Schema: public; Owner: callisto
--

SELECT pg_catalog.setval('public.wallets_walletplatform_id_seq', 6, true);


--
-- Name: auth_group auth_group_name_key; Type: CONSTRAINT; Schema: public; Owner: callisto
--

ALTER TABLE ONLY public.auth_group
    ADD CONSTRAINT auth_group_name_key UNIQUE (name);


--
-- Name: auth_group_permissions auth_group_permissions_group_id_permission_id_0cd325b0_uniq; Type: CONSTRAINT; Schema: public; Owner: callisto
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_group_id_permission_id_0cd325b0_uniq UNIQUE (group_id, permission_id);


--
-- Name: auth_group_permissions auth_group_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: callisto
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_pkey PRIMARY KEY (id);


--
-- Name: auth_group auth_group_pkey; Type: CONSTRAINT; Schema: public; Owner: callisto
--

ALTER TABLE ONLY public.auth_group
    ADD CONSTRAINT auth_group_pkey PRIMARY KEY (id);


--
-- Name: auth_permission auth_permission_content_type_id_codename_01ab375a_uniq; Type: CONSTRAINT; Schema: public; Owner: callisto
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_content_type_id_codename_01ab375a_uniq UNIQUE (content_type_id, codename);


--
-- Name: auth_permission auth_permission_pkey; Type: CONSTRAINT; Schema: public; Owner: callisto
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_pkey PRIMARY KEY (id);


--
-- Name: auth_user_groups auth_user_groups_pkey; Type: CONSTRAINT; Schema: public; Owner: callisto
--

ALTER TABLE ONLY public.auth_user_groups
    ADD CONSTRAINT auth_user_groups_pkey PRIMARY KEY (id);


--
-- Name: auth_user_groups auth_user_groups_user_id_group_id_94350c0c_uniq; Type: CONSTRAINT; Schema: public; Owner: callisto
--

ALTER TABLE ONLY public.auth_user_groups
    ADD CONSTRAINT auth_user_groups_user_id_group_id_94350c0c_uniq UNIQUE (user_id, group_id);


--
-- Name: auth_user auth_user_pkey; Type: CONSTRAINT; Schema: public; Owner: callisto
--

ALTER TABLE ONLY public.auth_user
    ADD CONSTRAINT auth_user_pkey PRIMARY KEY (id);


--
-- Name: auth_user_user_permissions auth_user_user_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: callisto
--

ALTER TABLE ONLY public.auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permissions_pkey PRIMARY KEY (id);


--
-- Name: auth_user_user_permissions auth_user_user_permissions_user_id_permission_id_14a6b632_uniq; Type: CONSTRAINT; Schema: public; Owner: callisto
--

ALTER TABLE ONLY public.auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permissions_user_id_permission_id_14a6b632_uniq UNIQUE (user_id, permission_id);


--
-- Name: auth_user auth_user_username_key; Type: CONSTRAINT; Schema: public; Owner: callisto
--

ALTER TABLE ONLY public.auth_user
    ADD CONSTRAINT auth_user_username_key UNIQUE (username);


--
-- Name: django_admin_log django_admin_log_pkey; Type: CONSTRAINT; Schema: public; Owner: callisto
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_pkey PRIMARY KEY (id);


--
-- Name: django_content_type django_content_type_app_label_model_76bd3d3b_uniq; Type: CONSTRAINT; Schema: public; Owner: callisto
--

ALTER TABLE ONLY public.django_content_type
    ADD CONSTRAINT django_content_type_app_label_model_76bd3d3b_uniq UNIQUE (app_label, model);


--
-- Name: django_content_type django_content_type_pkey; Type: CONSTRAINT; Schema: public; Owner: callisto
--

ALTER TABLE ONLY public.django_content_type
    ADD CONSTRAINT django_content_type_pkey PRIMARY KEY (id);


--
-- Name: django_migrations django_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: callisto
--

ALTER TABLE ONLY public.django_migrations
    ADD CONSTRAINT django_migrations_pkey PRIMARY KEY (id);


--
-- Name: django_session django_session_pkey; Type: CONSTRAINT; Schema: public; Owner: callisto
--

ALTER TABLE ONLY public.django_session
    ADD CONSTRAINT django_session_pkey PRIMARY KEY (session_key);


--
-- Name: exchanges_exchange exchanges_exchange_pkey; Type: CONSTRAINT; Schema: public; Owner: callisto
--

ALTER TABLE ONLY public.exchanges_exchange
    ADD CONSTRAINT exchanges_exchange_pkey PRIMARY KEY (id);


--
-- Name: mining_blockexplorer mining_blockexplorer_pkey; Type: CONSTRAINT; Schema: public; Owner: callisto
--

ALTER TABLE ONLY public.mining_blockexplorer
    ADD CONSTRAINT mining_blockexplorer_pkey PRIMARY KEY (id);


--
-- Name: mining_miningpool mining_miningpool_pkey; Type: CONSTRAINT; Schema: public; Owner: callisto
--

ALTER TABLE ONLY public.mining_miningpool
    ADD CONSTRAINT mining_miningpool_pkey PRIMARY KEY (id);


--
-- Name: team_membersocialnetwork team_membersocialnetwork_pkey; Type: CONSTRAINT; Schema: public; Owner: callisto
--

ALTER TABLE ONLY public.team_membersocialnetwork
    ADD CONSTRAINT team_membersocialnetwork_pkey PRIMARY KEY (id);


--
-- Name: team_socialnetwork team_socialnetwork_pkey; Type: CONSTRAINT; Schema: public; Owner: callisto
--

ALTER TABLE ONLY public.team_socialnetwork
    ADD CONSTRAINT team_socialnetwork_pkey PRIMARY KEY (id);


--
-- Name: team_teammember team_teammember_order_key; Type: CONSTRAINT; Schema: public; Owner: callisto
--

ALTER TABLE ONLY public.team_teammember
    ADD CONSTRAINT team_teammember_order_key UNIQUE ("order");


--
-- Name: team_teammember team_teammember_pkey; Type: CONSTRAINT; Schema: public; Owner: callisto
--

ALTER TABLE ONLY public.team_teammember
    ADD CONSTRAINT team_teammember_pkey PRIMARY KEY (id);


--
-- Name: wallets_wallet wallets_wallet_pkey; Type: CONSTRAINT; Schema: public; Owner: callisto
--

ALTER TABLE ONLY public.wallets_wallet
    ADD CONSTRAINT wallets_wallet_pkey PRIMARY KEY (id);


--
-- Name: wallets_walletplatform wallets_walletplatform_pkey; Type: CONSTRAINT; Schema: public; Owner: callisto
--

ALTER TABLE ONLY public.wallets_walletplatform
    ADD CONSTRAINT wallets_walletplatform_pkey PRIMARY KEY (id);


--
-- Name: auth_group_name_a6ea08ec_like; Type: INDEX; Schema: public; Owner: callisto
--

CREATE INDEX auth_group_name_a6ea08ec_like ON public.auth_group USING btree (name varchar_pattern_ops);


--
-- Name: auth_group_permissions_group_id_b120cbf9; Type: INDEX; Schema: public; Owner: callisto
--

CREATE INDEX auth_group_permissions_group_id_b120cbf9 ON public.auth_group_permissions USING btree (group_id);


--
-- Name: auth_group_permissions_permission_id_84c5c92e; Type: INDEX; Schema: public; Owner: callisto
--

CREATE INDEX auth_group_permissions_permission_id_84c5c92e ON public.auth_group_permissions USING btree (permission_id);


--
-- Name: auth_permission_content_type_id_2f476e4b; Type: INDEX; Schema: public; Owner: callisto
--

CREATE INDEX auth_permission_content_type_id_2f476e4b ON public.auth_permission USING btree (content_type_id);


--
-- Name: auth_user_groups_group_id_97559544; Type: INDEX; Schema: public; Owner: callisto
--

CREATE INDEX auth_user_groups_group_id_97559544 ON public.auth_user_groups USING btree (group_id);


--
-- Name: auth_user_groups_user_id_6a12ed8b; Type: INDEX; Schema: public; Owner: callisto
--

CREATE INDEX auth_user_groups_user_id_6a12ed8b ON public.auth_user_groups USING btree (user_id);


--
-- Name: auth_user_user_permissions_permission_id_1fbb5f2c; Type: INDEX; Schema: public; Owner: callisto
--

CREATE INDEX auth_user_user_permissions_permission_id_1fbb5f2c ON public.auth_user_user_permissions USING btree (permission_id);


--
-- Name: auth_user_user_permissions_user_id_a95ead1b; Type: INDEX; Schema: public; Owner: callisto
--

CREATE INDEX auth_user_user_permissions_user_id_a95ead1b ON public.auth_user_user_permissions USING btree (user_id);


--
-- Name: auth_user_username_6821ab7c_like; Type: INDEX; Schema: public; Owner: callisto
--

CREATE INDEX auth_user_username_6821ab7c_like ON public.auth_user USING btree (username varchar_pattern_ops);


--
-- Name: django_admin_log_content_type_id_c4bce8eb; Type: INDEX; Schema: public; Owner: callisto
--

CREATE INDEX django_admin_log_content_type_id_c4bce8eb ON public.django_admin_log USING btree (content_type_id);


--
-- Name: django_admin_log_user_id_c564eba6; Type: INDEX; Schema: public; Owner: callisto
--

CREATE INDEX django_admin_log_user_id_c564eba6 ON public.django_admin_log USING btree (user_id);


--
-- Name: django_session_expire_date_a5c62663; Type: INDEX; Schema: public; Owner: callisto
--

CREATE INDEX django_session_expire_date_a5c62663 ON public.django_session USING btree (expire_date);


--
-- Name: django_session_session_key_c0390e0f_like; Type: INDEX; Schema: public; Owner: callisto
--

CREATE INDEX django_session_session_key_c0390e0f_like ON public.django_session USING btree (session_key varchar_pattern_ops);


--
-- Name: team_membersocialnetwork_member_id_6f632da2; Type: INDEX; Schema: public; Owner: callisto
--

CREATE INDEX team_membersocialnetwork_member_id_6f632da2 ON public.team_membersocialnetwork USING btree (member_id);


--
-- Name: team_membersocialnetwork_network_id_1895842b; Type: INDEX; Schema: public; Owner: callisto
--

CREATE INDEX team_membersocialnetwork_network_id_1895842b ON public.team_membersocialnetwork USING btree (network_id);


--
-- Name: wallets_wallet_platform_id_7d1f867e; Type: INDEX; Schema: public; Owner: callisto
--

CREATE INDEX wallets_wallet_platform_id_7d1f867e ON public.wallets_wallet USING btree (platform_id);


--
-- Name: auth_group_permissions auth_group_permissio_permission_id_84c5c92e_fk_auth_perm; Type: FK CONSTRAINT; Schema: public; Owner: callisto
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissio_permission_id_84c5c92e_fk_auth_perm FOREIGN KEY (permission_id) REFERENCES public.auth_permission(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_group_permissions auth_group_permissions_group_id_b120cbf9_fk_auth_group_id; Type: FK CONSTRAINT; Schema: public; Owner: callisto
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_group_id_b120cbf9_fk_auth_group_id FOREIGN KEY (group_id) REFERENCES public.auth_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_permission auth_permission_content_type_id_2f476e4b_fk_django_co; Type: FK CONSTRAINT; Schema: public; Owner: callisto
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_content_type_id_2f476e4b_fk_django_co FOREIGN KEY (content_type_id) REFERENCES public.django_content_type(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_user_groups auth_user_groups_group_id_97559544_fk_auth_group_id; Type: FK CONSTRAINT; Schema: public; Owner: callisto
--

ALTER TABLE ONLY public.auth_user_groups
    ADD CONSTRAINT auth_user_groups_group_id_97559544_fk_auth_group_id FOREIGN KEY (group_id) REFERENCES public.auth_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_user_groups auth_user_groups_user_id_6a12ed8b_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: callisto
--

ALTER TABLE ONLY public.auth_user_groups
    ADD CONSTRAINT auth_user_groups_user_id_6a12ed8b_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES public.auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_user_user_permissions auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm; Type: FK CONSTRAINT; Schema: public; Owner: callisto
--

ALTER TABLE ONLY public.auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm FOREIGN KEY (permission_id) REFERENCES public.auth_permission(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_user_user_permissions auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: callisto
--

ALTER TABLE ONLY public.auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES public.auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: django_admin_log django_admin_log_content_type_id_c4bce8eb_fk_django_co; Type: FK CONSTRAINT; Schema: public; Owner: callisto
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_content_type_id_c4bce8eb_fk_django_co FOREIGN KEY (content_type_id) REFERENCES public.django_content_type(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: django_admin_log django_admin_log_user_id_c564eba6_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: callisto
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_user_id_c564eba6_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES public.auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: team_membersocialnetwork team_membersocialnet_member_id_6f632da2_fk_team_team; Type: FK CONSTRAINT; Schema: public; Owner: callisto
--

ALTER TABLE ONLY public.team_membersocialnetwork
    ADD CONSTRAINT team_membersocialnet_member_id_6f632da2_fk_team_team FOREIGN KEY (member_id) REFERENCES public.team_teammember(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: team_membersocialnetwork team_membersocialnet_network_id_1895842b_fk_team_soci; Type: FK CONSTRAINT; Schema: public; Owner: callisto
--

ALTER TABLE ONLY public.team_membersocialnetwork
    ADD CONSTRAINT team_membersocialnet_network_id_1895842b_fk_team_soci FOREIGN KEY (network_id) REFERENCES public.team_socialnetwork(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: wallets_wallet wallets_wallet_platform_id_7d1f867e_fk_wallets_w; Type: FK CONSTRAINT; Schema: public; Owner: callisto
--

ALTER TABLE ONLY public.wallets_wallet
    ADD CONSTRAINT wallets_wallet_platform_id_7d1f867e_fk_wallets_w FOREIGN KEY (platform_id) REFERENCES public.wallets_walletplatform(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

