"use client"

import { useRef, useEffect } from "react"

export default function ThreeLogoClient() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Import Three.js modules dynamically
    const importModules = async () => {
      const THREE = await import("three")
      const { OrbitControls } = await import("three/examples/jsm/controls/OrbitControls")

      // Scene setup
      const scene = new THREE.Scene()

      // Camera setup
      const camera = new THREE.PerspectiveCamera(
        75,
        containerRef.current.clientWidth / containerRef.current.clientHeight,
        0.1,
        1000,
      )
      camera.position.z = 5

      // Renderer setup
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      })
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      containerRef.current.appendChild(renderer.domElement)

      // Create a group for all objects
      const mainGroup = new THREE.Group()
      scene.add(mainGroup)

      // Add a subtle background gradient sphere
      const backgroundSphereGeometry = new THREE.SphereGeometry(15, 32, 32)
      const backgroundSphereMaterial = new THREE.MeshBasicMaterial({
        color: 0x2563eb,
        transparent: true,
        opacity: 0.05,
        side: THREE.BackSide,
      })
      const backgroundSphere = new THREE.Mesh(backgroundSphereGeometry, backgroundSphereMaterial)
      scene.add(backgroundSphere)

      // Add a subtle grid for depth perception
      const gridHelper = new THREE.GridHelper(20, 20, 0x2563eb, 0x1d4ed8)
      gridHelper.position.y = -3
      gridHelper.material.transparent = true
      gridHelper.material.opacity = 0.1
      scene.add(gridHelper)

      // Add background particles for depth
      const bgParticlesGeometry = new THREE.BufferGeometry()
      const bgParticleCount = 500
      const bgParticlePositions = new Float32Array(bgParticleCount * 3)

      for (let i = 0; i < bgParticleCount; i++) {
        // Random position in a larger sphere
        const radius = 8 + Math.random() * 7
        const theta = Math.random() * Math.PI * 2
        const phi = Math.acos(2 * Math.random() - 1)

        bgParticlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
        bgParticlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
        bgParticlePositions[i * 3 + 2] = radius * Math.cos(phi)
      }

      bgParticlesGeometry.setAttribute("position", new THREE.BufferAttribute(bgParticlePositions, 3))

      const bgParticlesMaterial = new THREE.PointsMaterial({
        size: 0.02,
        color: new THREE.Color("#2563EB"),
        transparent: true,
        opacity: 0.3,
        blending: THREE.AdditiveBlending,
      })

      const bgParticles = new THREE.Points(bgParticlesGeometry, bgParticlesMaterial)
      scene.add(bgParticles)

      // Create three spheres representing "work together, grow together, expand together"
      const sphereGeometry1 = new THREE.SphereGeometry(0.5, 32, 32)
      const sphereGeometry2 = new THREE.SphereGeometry(0.4, 32, 32)
      const sphereGeometry3 = new THREE.SphereGeometry(0.3, 32, 32)

      // Updated colors to match the new primary color #2563EB and variations
      const sphereMaterial1 = new THREE.MeshStandardMaterial({
        color: 0x2563eb, // Primary blue
        roughness: 0.3,
        metalness: 0.7,
      })

      const sphereMaterial2 = new THREE.MeshStandardMaterial({
        color: 0x3b82f6, // Lighter blue
        roughness: 0.3,
        metalness: 0.7,
      })

      const sphereMaterial3 = new THREE.MeshStandardMaterial({
        color: 0x1d4ed8, // Darker blue
        roughness: 0.3,
        metalness: 0.7,
      })

      const sphere1 = new THREE.Mesh(sphereGeometry1, sphereMaterial1)
      const sphere2 = new THREE.Mesh(sphereGeometry2, sphereMaterial2)
      const sphere3 = new THREE.Mesh(sphereGeometry3, sphereMaterial3)

      // Position the spheres in a triangular formation
      sphere1.position.set(-1, 0, 0)
      sphere2.position.set(1, 0, 0)
      sphere3.position.set(0, 1.5, 0)

      mainGroup.add(sphere1)
      mainGroup.add(sphere2)
      mainGroup.add(sphere3)

      // Add glow effect to spheres
      const addGlow = (sphere, color, size) => {
        const glowGeometry = new THREE.SphereGeometry(size * 1.2, 32, 32)
        const glowMaterial = new THREE.MeshBasicMaterial({
          color: color,
          transparent: true,
          opacity: 0.15,
          side: THREE.FrontSide,
        })
        const glow = new THREE.Mesh(glowGeometry, glowMaterial)
        sphere.add(glow)
      }

      addGlow(sphere1, 0x2563eb, 0.5)
      addGlow(sphere2, 0x3b82f6, 0.4)
      addGlow(sphere3, 0x1d4ed8, 0.3)

      // Create connecting lines between spheres (representing working together)
      const lineMaterial = new THREE.LineBasicMaterial({ color: 0x2563eb, transparent: true, opacity: 0.7 }) // Updated to new primary color

      // Line from sphere1 to sphere2 (work together)
      const line1Geometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(-1, 0, 0),
        new THREE.Vector3(1, 0, 0),
      ])
      const line1 = new THREE.Line(line1Geometry, lineMaterial)

      // Line from sphere1 to sphere3 (grow together)
      const line2Geometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(-1, 0, 0),
        new THREE.Vector3(0, 1.5, 0),
      ])
      const line2 = new THREE.Line(line2Geometry, lineMaterial)

      // Line from sphere2 to sphere3 (expand together)
      const line3Geometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(1, 0, 0),
        new THREE.Vector3(0, 1.5, 0),
      ])
      const line3 = new THREE.Line(line3Geometry, lineMaterial)

      mainGroup.add(line1)
      mainGroup.add(line2)
      mainGroup.add(line3)

      // Create particles around the spheres (representing growth and expansion)
      const particlesGeometry = new THREE.BufferGeometry()
      const particleCount = 300
      const particlePositions = new Float32Array(particleCount * 3)
      const particleVelocities = []

      for (let i = 0; i < particleCount; i++) {
        // Random position within a sphere
        const radius = 2 + Math.random() * 1
        const theta = Math.random() * Math.PI * 2
        const phi = Math.acos(2 * Math.random() - 1)

        const x = radius * Math.sin(phi) * Math.cos(theta)
        const y = radius * Math.sin(phi) * Math.sin(theta)
        const z = radius * Math.cos(phi)

        particlePositions[i * 3] = x
        particlePositions[i * 3 + 1] = y
        particlePositions[i * 3 + 2] = z

        // Store velocity for animation
        particleVelocities.push({
          x: (Math.random() - 0.5) * 0.01,
          y: (Math.random() - 0.5) * 0.01,
          z: (Math.random() - 0.5) * 0.01,
        })
      }

      particlesGeometry.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3))

      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.03,
        color: new THREE.Color("#2563EB"), // Updated to new primary color
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending,
      })

      const particles = new THREE.Points(particlesGeometry, particlesMaterial)
      mainGroup.add(particles)

      // Add ambient light
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
      scene.add(ambientLight)

      // Add directional light
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
      directionalLight.position.set(1, 1, 1)
      scene.add(directionalLight)

      // Add point lights near each sphere for better illumination
      const pointLight1 = new THREE.PointLight(0x2563eb, 1, 10) // Updated to new primary color
      pointLight1.position.set(-1, 0, 2)
      scene.add(pointLight1)

      const pointLight2 = new THREE.PointLight(0x3b82f6, 1, 10) // Updated to lighter blue
      pointLight2.position.set(1, 0, 2)
      scene.add(pointLight2)

      const pointLight3 = new THREE.PointLight(0x1d4ed8, 1, 10) // Updated to darker blue
      pointLight3.position.set(0, 1.5, 2)
      scene.add(pointLight3)

      // Add a subtle spotlight from behind for depth
      const backlight = new THREE.SpotLight(0xffffff, 0.5)
      backlight.position.set(0, 0, -10)
      backlight.angle = Math.PI / 4
      backlight.penumbra = 0.1
      backlight.decay = 2
      backlight.distance = 200
      scene.add(backlight)

      // Controls
      const controls = new OrbitControls(camera, renderer.domElement)
      controls.enableDamping = true
      controls.enableZoom = false
      controls.autoRotate = true
      controls.autoRotateSpeed = 1

      // Handle resize
      const handleResize = () => {
        if (!containerRef.current) return

        camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight
        camera.updateProjectionMatrix()
        renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
      }

      window.addEventListener("resize", handleResize)

      // Animation loop
      const clock = new THREE.Clock()

      const animate = () => {
        requestAnimationFrame(animate)

        const time = clock.getElapsedTime()

        // Rotate background elements
        bgParticles.rotation.y = time * 0.05
        backgroundSphere.rotation.y = time * 0.02
        backgroundSphere.rotation.x = time * 0.01

        // Animate spheres - pulsing effect (representing growth)
        sphere1.scale.set(
          1 + Math.sin(time * 1.5) * 0.1,
          1 + Math.sin(time * 1.5) * 0.1,
          1 + Math.sin(time * 1.5) * 0.1,
        )

        sphere2.scale.set(
          1 + Math.sin(time * 1.5 + 2) * 0.1,
          1 + Math.sin(time * 1.5 + 2) * 0.1,
          1 + Math.sin(time * 1.5 + 2) * 0.1,
        )

        sphere3.scale.set(
          1 + Math.sin(time * 1.5 + 4) * 0.1,
          1 + Math.sin(time * 1.5 + 4) * 0.1,
          1 + Math.sin(time * 1.5 + 4) * 0.1,
        )

        // Update particle positions (representing expansion)
        const positions = particles.geometry.attributes.position.array

        for (let i = 0; i < particleCount; i++) {
          const ix = i * 3
          const iy = i * 3 + 1
          const iz = i * 3 + 2

          // Update position based on velocity
          positions[ix] += particleVelocities[i].x
          positions[iy] += particleVelocities[i].y
          positions[iz] += particleVelocities[i].z

          // Calculate distance from center
          const distance = Math.sqrt(
            positions[ix] * positions[ix] + positions[iy] * positions[iy] + positions[iz] * positions[iz],
          )

          // If particle is too far, bring it closer to center (orbit-like behavior)
          if (distance > 3) {
            particleVelocities[i].x = -particleVelocities[i].x * 0.5
            particleVelocities[i].y = -particleVelocities[i].y * 0.5
            particleVelocities[i].z = -particleVelocities[i].z * 0.5
          }

          // If particle is too close to a sphere, push it away (interaction)
          const checkSphereProximity = (sphere, repelStrength = 0.01) => {
            const dx = positions[ix] - sphere.position.x
            const dy = positions[iy] - sphere.position.y
            const dz = positions[iz] - sphere.position.z

            const sphereDistance = Math.sqrt(dx * dx + dy * dy + dz * dz)

            if (sphereDistance < 0.7) {
              particleVelocities[i].x += (dx / sphereDistance) * repelStrength
              particleVelocities[i].y += (dy / sphereDistance) * repelStrength
              particleVelocities[i].z += (dz / sphereDistance) * repelStrength
            }
          }

          checkSphereProximity(sphere1)
          checkSphereProximity(sphere2)
          checkSphereProximity(sphere3)
        }

        particles.geometry.attributes.position.needsUpdate = true

        controls.update()
        renderer.render(scene, camera)
      }

      animate()

      // Cleanup
      return () => {
        window.removeEventListener("resize", handleResize)
        if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
          containerRef.current.removeChild(renderer.domElement)
        }
      }
    }

    importModules()
  }, [])

  return <div ref={containerRef} className="w-full h-full min-h-[300px]" aria-hidden="true" />
}

