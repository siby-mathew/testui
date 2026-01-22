import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { SearchInput } from "../Search";
import { NUMBER_CONFIG } from "@/const/config";
import { formatPhoneSafe } from "@/utils/format";

/* ---------------------------------- */
/* UI Components */
/* ---------------------------------- */

type DotProps = {
  style: React.CSSProperties;
};

const Dot = ({ style }: DotProps) => <div className="dot" style={style} />;

type NodeProps = {
  label: string;
  icon: string;
  rightAligner: boolean;
};

const FEATURES = [
  {
    label: "Wallet",
    icon: "💳",
  },
  {
    label: "Messaging",
    icon: "💬",
  },
  {
    label: "Identity",
    icon: "👤",
  },
  {
    label: "Payments",
    icon: "$",
  },
  {
    label: "Messaging",
    icon: "💬",
  },
];

const Node: React.FC<NodeProps> = ({ label, icon }) => (
  <Flex direction={"column"} alignItems={"center"}>
    <Flex>
      <Flex
        w="44px"
        h="44px"
        borderRadius="14px"
        border="1px solid rgba(182, 232, 78, 0.25)"
        bg="rgba(182, 232, 78, 0.06)"
        boxShadow="0 0 28px rgba(182, 232, 78, 0.18)"
        display="grid"
        placeItems="center"
      >
        {icon}
      </Flex>
    </Flex>
    <Flex mt={4} fontSize={16}>
      {label}
    </Flex>
  </Flex>
);

/* ---------------------------------- */
/* Particle System */
/* ---------------------------------- */

const COLORS = [
  "rgba(182, 232, 78, OPACITY)",
  "rgba(155, 210, 90, OPACITY)",
  "rgba(130, 185, 75, OPACITY)",
  "rgba(210, 255, 160, OPACITY)",
  "rgba(240, 255, 220, OPACITY)",
  "rgba(255, 255, 255, OPACITY)",
];

class Particle {
  private x = 0;
  private y = 0;
  private vx = 0;
  private vy = 0;
  private size = 1;
  private opacity = 0.2;
  private baseOpacity = 0.2;
  private color = COLORS[0];

  constructor(
    private readonly getWidth: () => number,
    private readonly getHeight: () => number,
  ) {
    this.reset();
  }

  private reset() {
    const width = this.getWidth();
    const height = this.getHeight();

    const angle = Math.random() * Math.PI * 2;
    const radius =
      Math.random() * Math.random() * Math.min(width, height) * 0.4;

    this.x = width / 2 + Math.cos(angle) * radius;
    this.y = height / 2 + Math.sin(angle) * radius;

    const driftSpeed = 0.1 + Math.random() * 0.2;
    const swirlStrength = 0.005;

    const dx = this.x - width / 2;
    const dy = this.y - height / 2;
    const dist = Math.sqrt(dx * dx + dy * dy) || 1;

    this.vx = (dx / dist) * driftSpeed;
    this.vy = (dy / dist) * driftSpeed;

    this.vx += -dy * swirlStrength * (Math.random() * 0.5 + 0.5);
    this.vy += dx * swirlStrength * (Math.random() * 0.5 + 0.5);

    this.vx += (Math.random() - 0.5) * 0.1;
    this.vy += (Math.random() - 0.5) * 0.1;

    this.size = 1 + Math.random() * 2.5;
    this.baseOpacity = 0.1 + Math.random() * 0.4;
    this.opacity = this.baseOpacity;
    this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
  }

  update() {
    const width = this.getWidth();
    const height = this.getHeight();

    this.x += this.vx;
    this.y += this.vy;

    if (
      this.x < -50 ||
      this.x > width + 50 ||
      this.y < -50 ||
      this.y > height + 50 ||
      this.opacity <= 0
    ) {
      this.reset();
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color.replace("OPACITY", this.opacity.toFixed(3));
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

/* ---------------------------------- */
/* Hooks */
/* ---------------------------------- */

const useParticleCanvas = (canvasRef: React.RefObject<HTMLCanvasElement>) => {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let rafId = 0;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    resize();

    const PARTICLE_COUNT = 400;
    const particles: Particle[] = [];

    const getWidth = () => width;
    const getHeight = () => height;

    const init = () => {
      particles.length = 0;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(new Particle(getWidth, getHeight));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = "lighter";

      for (const p of particles) {
        p.update();
        p.draw(ctx);
      }

      ctx.globalCompositeOperation = "source-over";
      rafId = requestAnimationFrame(animate);
    };

    init();
    animate();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, [canvasRef]);
};

const CHARS = "0123456789";

const useMutatingNumber = (initial: string, intervalMs = 120) => {
  const mutate = useCallback((base: string) => {
    return base.replace(/\d/g, (d) =>
      Math.random() > 0.85 ? CHARS[Math.floor(Math.random() * 10)] : d,
    );
  }, []);

  const [value, setValue] = useState(initial);

  useEffect(() => {
    const id = setInterval(() => {
      setValue((v) => `${NUMBER_CONFIG.extension}${mutate(v)}`.slice(0, 10));
    }, intervalMs);

    return () => clearInterval(id);
  }, [mutate, intervalMs]);

  return value;
};

/* ---------------------------------- */
/* Main Component */
/* ---------------------------------- */

export const Banner: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useParticleCanvas(canvasRef as any);

  const value = useMutatingNumber(`${NUMBER_CONFIG.extension}7777777`);

  return (
    <Flex
      direction="row"
      minH="100vh"
      alignItems="center"
      justifyContent="center"
      position="relative"
      className="sec01"
      _after={{
        content: "''",
        position: "absolute",
        inset: 0,
        bg: "rgba(0,0,0,.6)",
      }}
    >
      <Box
        as="canvas"
        ref={canvasRef}
        position="absolute"
        inset={0}
        id="nebulaCanvas"
        w="100%"
        h="100%"
        zIndex={0}
      />

      <Container maxW={{ xl: "4/5" }} position={"relative"} zIndex={1}>
        <Flex w="full" direction={{ base: "column", lg: "row" }}>
          {/* Left Visual */}
          <Flex
            flex="1"
            className="orbit-wrap"
            w={{ base: "100vw", lg: "40vw" }}
            position={"relative"}
          >
            <Flex
              className="core-inner"
              boxSize={{ base: "100%", lg: "360px" }}
              direction="column"
              justifyContent="center"
              position={"absolute"}
              inset={0}
              margin={"auto"}
            >
              <Box className="num">{`${NUMBER_CONFIG.prefix} ${formatPhoneSafe(value)}`}</Box>
              <Box className="label" mt={2}>
                ON-CHAIN NUMBER
              </Box>
            </Flex>

            <Box className="ring r1" opacity={0.15} />
            <Box className="ring r2" opacity={0.25} />
            <Box className="ring r3" opacity={0.4} />
            <Box className="ring r4" />
            <Box className="ring r5" />
            <Box
              position={"absolute"}
              height={"1px"}
              w="full"
              inset={0}
              m="auto"
              bgImage="linear-gradient( to right,transparent,rgba(182,232,78,0.1),rgba(182,232,78,0.1),rgba(182,232,78,0.1), transparent)"
            />
            <Box
              bgImage="linear-gradient(to right,transparent,rgba(182,232,78,0.1),rgba(182,232,78,0.1),rgba(182,232,78,0.1), transparent)"
              position={"absolute"}
              height={"1px"}
              w="full"
              inset={0}
              m="auto"
              transform={"rotate(90deg)"}
            />

            <Box className="core">
              <Box opacity={0.5} className="core-glow" />
            </Box>

            {/* <Node
              label="Wallet"
              icon="💳"
              style={{ left: "10%", top: "22%" }}
            />
            <Node
              label="Messaging"
              icon="💬"
              style={{ left: "63%", top: "18%" }}
            />
            <Node label="dApps" icon="▦" style={{ left: "78%", top: "48%" }} />
            <Node
              label="Identity"
              icon="👤"
              style={{ left: "12%", top: "70%" }}
            />
            <Node
              label="Payments"
              icon="$"
              style={{ left: "55%", top: "86%" }}
            /> */}

            <Dot style={{ left: "36%", top: "24%" }} />
            <Dot style={{ left: "72%", top: "31%" }} />
            <Dot style={{ left: "72%", top: "62%" }} />
            <Dot style={{ left: "30%", top: "76%" }} />
          </Flex>

          {/* Right Content */}
          <Flex flex="1" justifyContent="center" direction="column">
            <Heading
              fontSize={{ base: "5xl", lg: "6xl" }}
              fontWeight={500}
              lineHeight={1.4}
              textAlign={{ base: "center", lg: "left" }}
            >
              Claim your{" "}
              <Box as="span" color="brand.primary">
                +SOL
              </Box>{" "}
              Number
            </Heading>

            <Heading fontSize="2xl">Your Phone number, on Solana</Heading>

            <Text textAlign="left" fontSize={18} mt={6}>
              The first on-chain mobile identity. Forget long wallet addresses —
              use your unique number for payments, messaging, and earning
              rewards.
            </Text>

            <Box mt={10} w="full">
              <SearchInput />
            </Box>
          </Flex>
        </Flex>

        <Grid
          templateColumns={{ base: "repeat(5,1fr)" }}
          inset={0}
          gap={10}
          w="full"
        >
          {FEATURES.map((option, index) => {
            const rightAligner = [0, 2].indexOf(index) > -1;
            return (
              <GridItem key={option.label} alignContent={"center"}>
                <Node {...option} rightAligner={rightAligner} />
              </GridItem>
            );
          })}
        </Grid>
      </Container>
    </Flex>
  );
};
